import "./Styles/Animation.css";

export function Contact () {
        return (
          <div className="container mx-auto text-white text-center p-4 scroll-close" id="contact">
            <div className="mb-6 p-6 mx-auto w-full lg:w-3/4">
              <form action="https://api.web3forms.com/submit" method="POST">
                <h2 className="text-3xl font-bold mb-6 text-blue-200 scroll-right">
                  Contact <span className="text-orange-300">Me</span>
                </h2>
                <input type="hidden" name="access_key" value="f2b5a9e9-1168-4af8-b1eb-de673ca0846a" />
      
                <div className="flex flex-col lg:flex-row justify-around space-y-4 lg:space-y-0 lg:space-x-4">
                  <input
                    type="text"
                    className="form-input bg-slate-500 text-white p-3 rounded-lg w-full"
                    name="Name"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="form-input bg-slate-500 text-white p-3 rounded-lg w-full"
                    name="Email"
                    placeholder="Email Address"
                  />
                </div>
      
                <div className="flex flex-col lg:flex-row justify-around space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
                  <input
                    type="text"
                    className="form-input bg-slate-500 text-white p-3 rounded-lg w-full"
                    name="Mobile No"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="form-input bg-slate-500 text-white p-3 rounded-lg w-full"
                    name="Subject"
                    placeholder="Email Subject"
                  />
                </div>
      
                <div className="mt-4">
                  <textarea
                    className="form-textarea bg-slate-500 text-white p-3 rounded-lg w-full"
                    rows="5"
                    name="Message"
                    placeholder="Write Your Message Here"
                  ></textarea>
                </div>
      
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-transparent border border-orange-300  text-orange-300
          hover:text-slate-300 hover:bg-slate-950 hover:border-slate-300 font-bold py-3 px-8 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      };
      