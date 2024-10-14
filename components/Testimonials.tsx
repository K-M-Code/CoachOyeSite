import Image from 'next/image';
import Lin from '@/public/images/testimonials/Lin ThumYunThai.jpg';
import Joona from '@/public/images/testimonials/Joona.jpg';
import Rashida from '@/public/images/testimonials/Rashida Mohammed.jpg';
import Charles from '@/public/images/testimonials/Charles.jpg';
import Anjan from '@/public/images/testimonials/Anjan Bayalkoti.jpg'
import Cathy from '@/public/images/testimonials/Cathy Leonelle.jpg';
import Uche from '@/public/images/testimonials/Uchechukwu Unachukwu.jpg';
import Rhoda from '@/public/images/testimonials/Rhoda.jpg';
import MaleIcon from '@/public/images/icons/male1.svg'
// import FemaleIcon from '@/public/images/icons/female1.svg'

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Francis is a friendly, open, and knowledgeable person with a deep understanding of both business theory and real-world practice. His recommendations, especially for key hires like Yen, have been invaluable. Our discussions are always insightful, and his connections have significantly benefited our restaurant business. A truly great collaborator!",
      name: 'Lin',
      position: 'Tom Yum Thai',
      photo: Lin.src,
    },{
      quote:
        "I have received professional advice from Francis on how to improve my CV. He helped me understand what to highlight and how to present my skills in a way that stands out to employers. I can warmly recommend Francis for anyone looking for support with job applications, CV writing, or career advice.",
      name: 'Joona',
      position: '',
      photo: Joona.src,
    },
    {
      quote:
        "My name is Rashida Mohammed. I am a Ghanaian studying MSc. Industrial Management at the University of Vaasa. I must admit that the booked CV and Cover Letter Writing session I had with Francis recently was an amazing experience! He pays extreme attention to details, so passionate and professional. In the end, it was worth his time and effort as I fell in love with my CV and Cover Letter. I highly recommend his services to everyone",
      name: 'Rashida Mohammed',
      position: 'University of Vaasa',
      photo: Rashida.src,
    },
    {
      quote:
        "All the way from Nigeria , I want to appreciate and thank  you my coach and mentor Mr Oye, for your great support in mentoring me on how to achieve my goal in line with my desired profession of which have been struggling with , but when I came in contact with you , i have  learned so much  from you  and now am getting it right thank you boss. 👍🏽",
      name: 'Charles',
      position: '',
      photo: Charles.src,
    },
    {
      quote:
        "I'm Anjan Bayalkoti, an IT student at VAMK. Moving to Finland was challenging, but Oyeyiola Francis, my talent and career coach, greatly helped with my adaptation and career growth. His motivation and example inspire me, especially his advice to stay brave and face obstacles. Thank you, Francis!",
      name: 'Anjan Bayalkoti',
      position: 'VAMK',
      photo: Anjan.src,
    },
    {
      quote:
        "Having Mr. Francis as a talent coach has been a life-changing experience for me! His guidance helped me regain confidence and clarity through various phases of my life, both academically and professionally. Mr. Francis has a unique ability to uplift others, helping you see solutions where you once saw obstacles. I truly value his skills and mindset, and I cannot recommend him highly enough!",
      name: 'Cathy Leonelle',
      position: 'VAMK',
      photo: Cathy.src,
    },
    {
      quote:
        "Francis has definitely made my life in Finland much more enjoyable. Plus , he’s always positive and bubbly and full of positivity .. definitely learnt a lot from him 😁",
      name: 'Uchechukwu Unachukwu',
      position: 'VAMK',
      photo: Uche.src,
    },
    {
      quote:
        "Francis gave me room to express my needs and gave me a good listening ear. I learnt key things about career development and a new perspective of viewing my career from him. Regular self-evaluation about my work, self-awareness and actively listening to those experienced in my field are things I have learnt to pay attention to from this session. Looking forward to booking other sessions for other aspects.",
      name: 'Rhoda',
      position: 'Nursing Student',
      photo: Rhoda.src,
    },
    {
      quote:
        "Francis is a very empathetic, sincere, and positive person. He carefully listened to my request and guided me toward steps that truly suited me best! Highly recommend.",
      name: 'Nazar',
      position: '',
      photo: MaleIcon.src,
    },
    {
      quote:
        "It was the best session that I ever attended, and thanks to Mr. Francis, I have experienced the most productive week in my life.",
      name: 'Peter',
      position: 'Accounting Student',
      photo: MaleIcon.src,
    },
    {
      quote:
        "It was an excellent session with Mentor Francis. Thank you for your advice on adjusting my CV to have more opportunities in the job market.",
      name: 'Hau',
      position: 'Business Student',
      photo: MaleIcon.src,
    },
  ];

  return (
    <section id='testimonials' className="bg-primary py-20 text-white">
      <div className="container mx-auto">
      <h2 className="mb-12 text-center">
        What people say about my services?
      </h2>

      <div
        className="relative flex overflow-hidden"
      >
        <div className="flex max-w-[100svw] items-center justify-start gap-8 animate-infinite-scroll">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[75vw] sm:min-w-[45vw] lg:min-w-[30vw] flex-col gap-10 lg:flex-row bg-white text-black p-8 shadow-xl my-10 hover:shadow-2xl transform hover:scale-105 duration-300 rounded-xl"
            >
              <div className="flex flex-col gap-4">
                <p className="line-clamp-6">{testimonial.quote}</p>
                <div className="flex gap-6">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={100}
                    height={100}                    
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="">{testimonial.name}</h3>
                    <p className="">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
