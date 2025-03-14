import { useState } from "react";

const faqs = [
    { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { question: "Where does it come from?", answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    { question: "Where can I get some?", answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-10 pb-20">
            <div className="container mx-auto mt-10 bg-white px-4 lg:px-0">
                <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-dashed border-neutral-300 pb-5">
                            <button
                                className="w-full flex justify-between items-center py-2 cursor-pointer text-lg focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                <a class="border border-neutral-300 p-3 font-medium px-10 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition duration-500" href="/">
                    Show More
                </a>
                </div>                
            </div>
        </section>
    );
}
