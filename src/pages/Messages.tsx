
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Search, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock conversation data
const CONVERSATIONS = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "Let me know if you have any other questions about the AI course.",
    unread: true,
    timestamp: "10:30 AM",
    messages: [
      {
        id: "1",
        sender: "mentor",
        text: "Hello! How can I help you with your career guidance today?",
        timestamp: "Yesterday, 4:30 PM"
      },
      {
        id: "2",
        sender: "user",
        text: "Hi Dr. Johnson! I'm trying to decide between focusing on AI or cybersecurity for my computer science degree. Do you have any advice?",
        timestamp: "Yesterday, 4:45 PM"
      },
      {
        id: "3",
        sender: "mentor",
        text: "That's a great question! Both are excellent fields with strong job prospects. AI is growing rapidly with applications across many industries, while cybersecurity offers stable demand and critical importance in our digital world. What aspects interest you most about each?",
        timestamp: "Yesterday, 5:00 PM"
      },
      {
        id: "4",
        sender: "user",
        text: "I like the creative problem-solving aspect of AI, but I'm also drawn to the mission-critical nature of cybersecurity. I'm worried AI might be too math-heavy though.",
        timestamp: "Yesterday, 5:10 PM"
      },
      {
        id: "5",
        sender: "mentor",
        text: "Valid concerns! AI does involve significant mathematical foundations - particularly linear algebra, calculus, and statistics. Cybersecurity requires strong systems knowledge and analytical thinking. Given your interests, have you considered a specialization that combines both? AI security is an emerging field that addresses vulnerabilities in AI systems.",
        timestamp: "Yesterday, 5:25 PM"
      },
      {
        id: "6",
        sender: "user",
        text: "That sounds interesting! I hadn't considered combining them. Are there specific courses you'd recommend to explore this intersection?",
        timestamp: "Yesterday, 5:40 PM"
      },
      {
        id: "7",
        sender: "mentor",
        text: "Absolutely! Start with foundational courses in both areas - Introduction to Machine Learning and Network Security Fundamentals. Then look for specialized courses like 'Security and Privacy in AI' or 'Adversarial Machine Learning'. I can recommend some online resources to explore these topics before committing to a specialization.",
        timestamp: "Yesterday, 6:00 PM"
      },
      {
        id: "8",
        sender: "user",
        text: "That would be very helpful! I'd appreciate any resources you can share.",
        timestamp: "Today, 9:15 AM"
      },
      {
        id: "9",
        sender: "mentor",
        text: "I've put together a list of courses and readings on AI security. Would you like me to share some industry trends in this field as well?",
        timestamp: "Today, 10:30 AM"
      }
    ]
  },
  {
    id: "2",
    name: "Robert Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "I can help you prepare for your business school interview next week.",
    unread: false,
    timestamp: "Yesterday",
    messages: []
  },
  {
    id: "3",
    name: "Dr. Emily Patel",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "The medical research opportunity I mentioned is still open for applications.",
    unread: false,
    timestamp: "2d ago",
    messages: []
  }
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(CONVERSATIONS[0]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = CONVERSATIONS.filter(conv => 
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    
    // In a real application, this would send the message to a backend
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
    
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-250px)] min-h-[500px]">
          <div className="flex h-full">
            {/* Conversation List */}
            <div className="w-full sm:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    className="pl-10"
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex-grow overflow-y-auto">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                        activeConversation.id === conv.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setActiveConversation(conv)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <img
                              src={conv.image}
                              alt={conv.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          {conv.unread && (
                            <div className="absolute top-0 right-0 h-2.5 w-2.5 bg-blue-600 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h4 className={`font-medium truncate ${conv.unread ? "text-gray-900" : "text-gray-700"}`}>
                              {conv.name}
                            </h4>
                            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conv.timestamp}</span>
                          </div>
                          <p className={`text-sm truncate ${conv.unread ? "text-gray-800" : "text-gray-500"}`}>
                            {conv.lastMessage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">No conversations found</div>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div className="hidden sm:flex flex-col flex-grow">
              {/* Conversation Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={activeConversation?.image}
                      alt={activeConversation?.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{activeConversation?.name}</h3>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
              
              {/* Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {activeConversation?.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "user"
                          ? "bg-blue-800 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <div className="text-sm">{msg.text}</div>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "user" ? "text-blue-200" : "text-gray-500"
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                {activeConversation?.messages.length === 0 && (
                  <div className="text-center py-10">
                    <div className="text-gray-400 mb-2">No messages yet</div>
                    <p className="text-sm text-gray-500">Send a message to start the conversation</p>
                  </div>
                )}
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <Input
                    className="flex-grow"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <Button
                    className="bg-blue-800 hover:bg-blue-700"
                    onClick={handleSendMessage}
                    disabled={message.trim() === ""}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>
                    Need AI help? Try the{" "}
                    <a href="/dashboard" className="text-blue-800 hover:underline">
                      AI Career Advisor
                    </a>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Empty state for smaller screens */}
            <div className="flex-grow flex items-center justify-center sm:hidden">
              <div className="text-center">
                <MessageSquare className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <h3 className="font-medium text-gray-900 mb-1">Select a conversation</h3>
                <p className="text-sm text-gray-500">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Messages;
