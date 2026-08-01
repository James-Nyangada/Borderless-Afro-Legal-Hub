'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, AlertTriangle, CornerDownRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CommentType {
  _id: string;
  name: string;
  text: string;
  likes: number;
  replyTo?: string;
  createdAt: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<string[]>([]);
  
  useEffect(() => {
    const storedLikes = localStorage.getItem('likedComments');
    if (storedLikes) {
      try {
        setLikedComments(JSON.parse(storedLikes));
      } catch (e) {}
    }
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const fetchComments = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/comments/post/${postId}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data.data.comments);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent, parentId?: string) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const payload = {
        ...formData,
        replyTo: parentId || undefined
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/comments/post/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setFormData({ name: '', email: '', text: '' });
        setReplyingTo(null);
        setSubmitStatus({ type: 'success', message: 'Comment posted successfully!' });
        fetchComments();
      } else {
        const errData = await res.json();
        setSubmitStatus({ type: 'error', message: errData.message || 'Failed to post comment.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    }
  };

  const handleLike = async (commentId: string) => {
    try {
      const isLiked = likedComments.includes(commentId);
      const action = isLiked ? 'unlike' : 'like';
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/comments/${commentId}/like`, { 
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action })
      });
      
      if (res.ok) {
        // Optimistic update
        setComments(comments.map(c => {
          if (c._id === commentId) {
            // Prevent negative likes just in case
            const newLikes = action === 'unlike' ? Math.max(0, c.likes - 1) : c.likes + 1;
            return { ...c, likes: newLikes };
          }
          return c;
        }));
        
        const newLikedComments = isLiked 
          ? likedComments.filter(id => id !== commentId)
          : [...likedComments, commentId];
          
        setLikedComments(newLikedComments);
        localStorage.setItem('likedComments', JSON.stringify(newLikedComments));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleReport = async (commentId: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1'}/comments/${commentId}/report`, { method: 'PATCH' });
      if (res.ok) {
        toast.success('Comment has been reported and will be reviewed by an admin.');
      }
    } catch (error) {
      console.error('Error reporting comment:', error);
    }
  };

  // Build comment tree
  const rootComments = comments.filter(c => !c.replyTo);
  
  const getReplies = (parentId: string) => {
    return comments.filter(c => c.replyTo === parentId);
  };

  const renderCommentForm = (parentId?: string) => (
    <form onSubmit={(e) => handleSubmit(e, parentId)} className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
      <h4 className="text-sm font-semibold text-navy mb-3">
        {parentId ? 'Write a reply' : 'Leave a comment'}
      </h4>
      
      {submitStatus.type && !parentId && (
        <div className={`mb-4 p-3 rounded-md text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Name *</label>
          <input 
            type="text" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full rounded-md border-gray-200 shadow-sm focus:border-gold focus:ring focus:ring-gold/20 text-sm px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Email * <span className="text-gray-400 font-normal">(Hidden from public)</span></label>
          <input 
            type="email" 
            name="email" 
            required 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-md border-gray-200 shadow-sm focus:border-gold focus:ring focus:ring-gold/20 text-sm px-3 py-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs text-gray-500 mb-1">Comment *</label>
        <textarea 
          name="text" 
          required 
          rows={3}
          value={formData.text}
          onChange={handleInputChange}
          className="w-full rounded-md border-gray-200 shadow-sm focus:border-gold focus:ring focus:ring-gold/20 text-sm px-3 py-2"
        ></textarea>
      </div>
      <div className="flex justify-end gap-2">
        {parentId && (
          <button 
            type="button" 
            onClick={() => setReplyingTo(null)}
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
        )}
        <button 
          type="submit"
          className="bg-navy hover:bg-navy-2 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {parentId ? 'Post Reply' : 'Post Comment'}
        </button>
      </div>
    </form>
  );

  const renderCommentItem = (comment: CommentType, depth = 0) => {
    const replies = getReplies(comment._id);
    
    return (
      <div key={comment._id} className={`mt-6 ${depth > 0 ? 'ml-4 md:ml-12 border-l-2 border-gray-100 pl-4 md:pl-6' : ''}`}>
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-cream flex items-center justify-center shrink-0">
            <span className="text-navy font-bold text-lg">{comment.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-navy truncate">{comment.name}</h4>
              <span className="text-xs text-gray-400 shrink-0">
                {new Date(comment.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-3 whitespace-pre-wrap">{comment.text}</p>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <button 
                onClick={() => handleLike(comment._id)}
                className={`flex items-center gap-1.5 transition-colors group ${likedComments.includes(comment._id) ? 'text-gold' : 'hover:text-gold'}`}
              >
                <ThumbsUp className={`h-3.5 w-3.5 ${likedComments.includes(comment._id) ? 'fill-gold text-gold' : 'group-hover:fill-gold/20'}`} /> 
                <span className="font-medium">
                  {comment.likes > 0 ? `${comment.likes} ${comment.likes === 1 ? 'Like' : 'Likes'}` : 'Like'}
                </span>
              </button>
              
              <button 
                onClick={() => setReplyingTo(replyingTo === comment._id ? null : comment._id)}
                className="flex items-center gap-1 hover:text-navy transition-colors"
              >
                <CornerDownRight className="h-3.5 w-3.5" /> Reply
              </button>
              
              <button 
                onClick={() => handleReport(comment._id)}
                className="flex items-center gap-1 hover:text-red-500 transition-colors ml-auto"
                title="Report inappropriate comment"
              >
                <AlertTriangle className="h-3.5 w-3.5" /> Report
              </button>
            </div>
            
            {replyingTo === comment._id && (
              <div className="mt-4">
                {renderCommentForm(comment._id)}
              </div>
            )}
          </div>
        </div>
        
        {/* Render Replies */}
        {replies.length > 0 && (
          <div className="mt-2">
            {replies.map(reply => renderCommentItem(reply, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border-t border-gray-100 pt-10 mt-16">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="h-5 w-5 text-gold" />
        <h3 className="text-2xl font-bold text-navy">Comments ({comments.length})</h3>
      </div>
      
      {!replyingTo && renderCommentForm()}
      
      {loading ? (
        <div className="py-8 text-center text-gray-400 text-sm">Loading comments...</div>
      ) : rootComments.length > 0 ? (
        <div className="mt-8">
          {rootComments.map(comment => renderCommentItem(comment))}
        </div>
      ) : (
        <div className="py-8 text-center text-gray-500 text-sm border border-dashed border-gray-200 rounded-xl mt-8">
          No comments yet. Be the first to share your thoughts!
        </div>
      )}
    </div>
  );
}
