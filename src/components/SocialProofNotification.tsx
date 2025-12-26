import { useState, useEffect } from "react";

const notifications = [
  { name: "Sarah M.", action: "just got paid for reviewing Stranger Things" },
  { name: "Mike T.", action: "received payment for Wednesday review" },
  { name: "Emma L.", action: "earned $45 reviewing The Crown" },
  { name: "James K.", action: "completed 5 reviews this week" },
  { name: "Anna P.", action: "just joined the reviewer program" },
];

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show notification after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Rotate notifications every 5 seconds
    const rotateTimer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(rotateTimer);
  }, [isVisible]);

  const currentNotification = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="bg-card border border-border/50 rounded-xl p-4 shadow-xl max-w-sm">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-semibold text-sm">
              {currentNotification.name.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-foreground text-sm">
              <span className="font-semibold">{currentNotification.name}</span>{" "}
              <span className="text-muted-foreground">{currentNotification.action}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              2 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
