import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <section className="space-y-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <Input id="subject" type="text" placeholder="Subject" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
      <footer className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p>Address: 123 ElectroMart St, Tech City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: support@electromart.com</p>
      </footer>
    </div>
  );
};

export default ContactUs;