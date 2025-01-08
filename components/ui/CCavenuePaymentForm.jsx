import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CCavenuePaymentForm({ isOpen, onClose, ticketName, amount, currency, onSubmit }) {
  const [formData, setFormData] = useState({
    billing_email: '',
    billing_name: '',
    billing_address: '',
    billing_city: '',
    billing_state: '',
    billing_zip: '',
    billing_country: '',
    billing_tel: '',
  });

  const taxRate = 0.05; // 5% tax rate
  const taxAmount = amount * taxRate;
  const totalAmount = amount + taxAmount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const formatCurrency = (value) => {
    return currency === "INR" ? `₹${value.toLocaleString()}` : `$${value.toLocaleString()}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Payment Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_name">Full Name</Label>
              <Input id="billing_name" name="billing_name" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="billing_email">Email</Label>
              <Input id="billing_email" name="billing_email" type="email" required onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label htmlFor="billing_address">Address</Label>
            <Input id="billing_address" name="billing_address" required onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_city">City</Label>
              <Input id="billing_city" name="billing_city" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="billing_state">State</Label>
              <Input id="billing_state" name="billing_state" required onChange={handleChange} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_zip">ZIP Code</Label>
              <Input id="billing_zip" name="billing_zip" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="billing_country">Country</Label>
              <Input id="billing_country" name="billing_country" required onChange={handleChange} />
            </div>
          </div>
          <div>
            <Label htmlFor="billing_tel">Phone Number</Label>
            <Input id="billing_tel" name="billing_tel" type="tel" required onChange={handleChange} />
          </div>
          <div className="mt-6 space-y-2 bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between">
              <Label>Base Amount:</Label>
              <span className="font-semibold">{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <Label>Tax (5%):</Label>
              <span>{formatCurrency(taxAmount)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
              <Label>Total Amount:</Label>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
          </div>
          <Button type="submit" className="w-full mt-6">Proceed to Payment</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}