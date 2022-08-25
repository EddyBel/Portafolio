import { useEffect, useState } from "react";

export function BoxImg() {
  const [size, setSize] = useState();

  useEffect(() => {
    const card = document.querySelector(".card-form-contact");
    setSize(card.clientHeight);
    card.addEventListener("resize", () => {
      setSize(card.clientHeight);
    });
  }, []);

  return (
    <div
      className="contact-seccion-right w-2/6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height: `${size}px`,
      }}
    ></div>
  );
}
