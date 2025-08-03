const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  if (reviews.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Guest reviews</h2>
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="flex space-x-4">
            <img 
              src={review.avatar} 
              alt={review.name} 
              className="w-12 h-12 rounded-full object-cover" 
            />
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
