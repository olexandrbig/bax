type ContactUsProps = {
  id?: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
};

export function ContactUs({
                            id = "contact",
                            src = "/ContactUs.html",
                            width = 450,
                            height = 560,
                            className = "w-[450px] h-[560px] max-w-full inline-block",
                          }: ContactUsProps) {
  return (
    <section id={id} className="bg-(--color-6) pt-20">
      <h2 className="text-3xl font-semibold text-center text-(--color-1)">For inquiries, please reach out to us</h2>
      <div className="mx-auto px-6 py-8 gap-10 text-center">
        <iframe src={src} frameBorder="0" width={width} height={height} className={className}></iframe>
      </div>
    </section>
  );
}
