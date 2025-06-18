import SubscribeForm from "./SubscribeForm";
import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <SubscribeForm />
        <div className="line-footer"></div>

        <div className="footer-container">
          <FooterLogo />

          <FooterColumn
            title="Quick Links"
            links={[
              { text: "Home" },
              { text: "About" },
              { text: "Services" },
              { text: "Company" },
            ]}
          />

          <FooterColumn
            title="Support"
            links={[
              { text: "Help Center" },
              { text: "FAQs" },
              { text: "Privacy Policy" },
              { text: "Report an Issue" },
            ]}
          />

          <FooterColumn
            title="Contact Us"
            links={[
              {
                text: "+62 857-7070-2033",
                icon: <i class="ri-whatsapp-line"></i>,
              },
              {
                text: "paratekno@gmail.com",
                icon: <i class="ri-mail-fill"></i>,
              },
              {
                text: "Taman Palem Lestari",
                icon: <i class="ri-map-pin-line"></i>,
              },
            ]}
          />
        </div>

        <div className="line-footer-2"></div>
        <div className="footer-bar">
          Copyright &copy; 2025 Web Paratekno. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
