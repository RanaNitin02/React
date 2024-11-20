// import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input type="text" className="w-full p-2 bg-[#112240] border border-white-700 
        rounded" />
      </div>
      <div>
        <label className="block">Email</label>
        <input type="email" className="w-full p-2 bg-[#112240] border border-white-700 rounded" />
      </div>
      <div>
        <label className="block">Message</label>
        <textarea className="w-full p-2 bg-[#112240] border border-white-700 rounded"></textarea>
      </div>
      <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 p-2 
      rounded">Submit</button>
    </form>
  );
};

export default ContactForm;
