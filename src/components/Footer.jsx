import React from "react";

function Footer() {
  return (
    <section
      className="flex justify-center mt-10"
      style={{ color: "var(--text-color)" }}
    >
      <div className="text-sm md:text-md">
        <p><span className="text-lg">&copy;</span> 2025 Vishwa Vegad.</p>
        <p>All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
