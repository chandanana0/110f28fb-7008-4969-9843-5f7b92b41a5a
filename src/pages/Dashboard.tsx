import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, TrendingUp, AlertCircle, Calendar, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Subscription {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'yearly';
  nextBilling: string;
  status: 'active' | 'paused' | 'canceling' | 'cancelled';
  icon: string;
  color: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newSubscription, setNewSubscription] = useState({
    name: '',
    category: '',
    price: '',
    billingCycle: 'monthly' as 'monthly' | 'yearly',
    nextBilling: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('subrok_user');
    if (!userData) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    
    // Load subscriptions from localStorage or set defaults
    const savedSubs = localStorage.getItem('subrok_subscriptions');
    if (savedSubs) {
      setSubscriptions(JSON.parse(savedSubs));
    } else {
      // Default subscriptions for demo
      const defaultSubs: Subscription[] = [
        {
          id: '1',
          name: 'Netflix',
          category: 'Entertainment',
          price: 649,
          currency: '₹',
          billingCycle: 'monthly',
          nextBilling: '2024-01-15',
          status: 'active',
          icon: 'N',
          color: 'bg-red-500'
        },
        {
          id: '2',
          name: 'Spotify Premium',
          category: 'Music',
          price: 119,
          currency: '₹',
          billingCycle: 'monthly',
          nextBilling: '2024-01-12',
          status: 'active',
          icon: 'S',
          color: 'bg-green-500'
        },
        {
          id: '3',
          name: 'Adobe Creative Cloud',
          category: 'Software',
          price: 1675,
          currency: '₹',
          billingCycle: 'monthly',
          nextBilling: '2024-01-20',
          status: 'canceling',
          icon: 'A',
          color: 'bg-red-600'
        }
      ];
      setSubscriptions(defaultSubs);
      localStorage.setItem('subrok_subscriptions', JSON.stringify(defaultSubs));
    }
  }, [navigate]);

  const totalMonthlySpend = subscriptions
    .filter(sub => sub.status === 'active')
    .reduce((total, sub) => {
      const monthlyAmount = sub.billingCycle === 'yearly' ? sub.price / 12 : sub.price;
      return total + monthlyAmount;
    }, 0);

  const yearlyProjection = totalMonthlySpend * 12;

  const handleAddSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newSubscription.name || !newSubscription.category || !newSubscription.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const subscription: Subscription = {
      id: Date.now().toString(),
      name: newSubscription.name,
      category: newSubscription.category,
      price: parseFloat(newSubscription.price),
      currency: '₹',
      billingCycle: newSubscription.billingCycle,
      nextBilling: newSubscription.nextBilling || new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
      status: 'active',
      icon: newSubscription.name.charAt(0).toUpperCase(),
      color: `bg-${['blue', 'green', 'purple', 'pink', 'indigo', 'yellow'][Math.floor(Math.random() * 6)]}-500`
    };

    const updatedSubs = [...subscriptions, subscription];
    setSubscriptions(updatedSubs);
    localStorage.setItem('subrok_subscriptions', JSON.stringify(updatedSubs));
    
    setNewSubscription({
      name: '',
      category: '',
      price: '',
      billingCycle: 'monthly',
      nextBilling: ''
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Subscription Added",
      description: `${subscription.name} has been added to your dashboard.`,
    });
  };

  const handleStatusChange = (id: string, newStatus: Subscription['status']) => {
    const updatedSubs = subscriptions.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    );
    setSubscriptions(updatedSubs);
    localStorage.setItem('subrok_subscriptions', JSON.stringify(updatedSubs));
    
    toast({
      title: "Status Updated",
      description: `Subscription status has been updated.`,
    });
  };

  const handleDeleteSubscription = (id: string) => {
    const updatedSubs = subscriptions.filter(sub => sub.id !== id);
    setSubscriptions(updatedSubs);
    localStorage.setItem('subrok_subscriptions', JSON.stringify(updatedSubs));
    
    toast({
      title: "Subscription Removed",
      description: "Subscription has been removed from your dashboard.",
    });
  };

  const getStatusBadge = (status: Subscription['status']) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', text: 'Active' },
      paused: { color: 'bg-gray-100 text-gray-800', text: 'Paused' },
      canceling: { color: 'bg-yellow-100 text-yellow-800', text: 'Canceling' },
      cancelled: { color: 'bg-red-100 text-red-800', text: 'Cancelled' }
    };
    
    const config = statusConfig[status];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-brand-cream-light">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-gradient-cta text-white rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Subscriptions</h1>
              <p className="text-white/80">Manage all your recurring payments in one place</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">₹{totalMonthlySpend.toFixed(2)}</div>
              <div className="text-white/80">Monthly Total</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Active Subscriptions</p>
                  <p className="text-3xl font-bold text-green-700">
                    {subscriptions.filter(sub => sub.status === 'active').length}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Monthly Spending</p>
                  <p className="text-3xl font-bold text-orange-700">₹{totalMonthlySpend.toFixed(2)}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-brand-orange" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Yearly Projection</p>
                  <p className="text-3xl font-bold text-blue-700">₹{yearlyProjection.toFixed(2)}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="cta" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Subscription
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Subscription</DialogTitle>
                  <DialogDescription>
                    Add a new subscription to track and manage.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddSubscription} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Service Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Netflix, Spotify"
                      value={newSubscription.name}
                      onChange={(e) => setNewSubscription({...newSubscription, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={newSubscription.category} 
                      onValueChange={(value) => setNewSubscription({...newSubscription, category: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entertainment">Entertainment</SelectItem>
                        <SelectItem value="Music">Music</SelectItem>
                        <SelectItem value="Software">Software</SelectItem>
                        <SelectItem value="Cloud Storage">Cloud Storage</SelectItem>
                        <SelectItem value="Productivity">Productivity</SelectItem>
                        <SelectItem value="Gaming">Gaming</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (₹)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={newSubscription.price}
                        onChange={(e) => setNewSubscription({...newSubscription, price: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cycle">Billing Cycle</Label>
                      <Select 
                        value={newSubscription.billingCycle} 
                        onValueChange={(value: 'monthly' | 'yearly') => setNewSubscription({...newSubscription, billingCycle: value})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nextBilling">Next Billing Date</Label>
                    <Input
                      id="nextBilling"
                      type="date"
                      value={newSubscription.nextBilling}
                      onChange={(e) => setNewSubscription({...newSubscription, nextBilling: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button type="submit" variant="cta" className="flex-1">
                      Add Subscription
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsAddDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="subscriptions" className="space-y-4">
            {subscriptions.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-dark">No subscriptions yet</h3>
                      <p className="text-muted-foreground">Add your first subscription to get started.</p>
                    </div>
                    <Button variant="cta" onClick={() => setIsAddDialogOpen(true)}>
                      Add Subscription
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {subscriptions.map((subscription) => (
                  <Card key={subscription.id} className="bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${subscription.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                            {subscription.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-brand-dark text-lg">{subscription.name}</h3>
                            <p className="text-muted-foreground text-sm">{subscription.category}</p>
                            <p className="text-xs text-muted-foreground">Next: {subscription.nextBilling}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          {getStatusBadge(subscription.status)}
                          <div className="text-right">
                            <div className="font-semibold text-brand-dark text-lg">
                              {subscription.currency}{subscription.price}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              /{subscription.billingCycle === 'monthly' ? 'month' : 'year'}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Select 
                              value={subscription.status} 
                              onValueChange={(value: Subscription['status']) => handleStatusChange(subscription.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="paused">Paused</SelectItem>
                                <SelectItem value="canceling">Canceling</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                            
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteSubscription(subscription.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Subscriptions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Subscriptions</CardTitle>
                  <CardDescription>Your latest subscription activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subscriptions.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${sub.color} rounded-md flex items-center justify-center text-white font-bold text-sm`}>
                            {sub.icon}
                          </div>
                          <div>
                            <div className="font-medium text-brand-dark">{sub.name}</div>
                            {getStatusBadge(sub.status)}
                          </div>
                        </div>
                        <div className="font-semibold text-brand-dark">
                          ₹{sub.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Renewals */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Renewals</CardTitle>
                  <CardDescription>Subscriptions renewing soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subscriptions
                      .filter(sub => sub.status === 'active')
                      .sort((a, b) => new Date(a.nextBilling).getTime() - new Date(b.nextBilling).getTime())
                      .slice(0, 3)
                      .map((sub) => (
                        <div key={sub.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 ${sub.color} rounded-md flex items-center justify-center text-white font-bold text-sm`}>
                              {sub.icon}
                            </div>
                            <div>
                              <div className="font-medium text-brand-dark">{sub.name}</div>
                              <div className="text-sm text-muted-foreground">{sub.nextBilling}</div>
                            </div>
                          </div>
                          <div className="font-semibold text-brand-dark">
                            ₹{sub.price}
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle>Spending Insights</CardTitle>
                <CardDescription>Analyze your subscription spending patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">Detailed analytics and insights will be available in the next update.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;