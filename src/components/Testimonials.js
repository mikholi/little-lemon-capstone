import customer1Image from '../images/customer1.jpg';
import customer2Image from '../images/customer2.jpg'
import customer3Image from '../images/customer3.jpg'
import customer4Image from '../images/customer4.jpg'
import './testimonials.css';
import TestimonialCard from './TestimonialCards';

const customers = [
  {
    fullName: 'Mark von Hertzen',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `My favorite place! Food and service are top-notch!`,
  },
  {
    fullName: 'Meryl McBannon',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Delicious ingredients and awesome staff who were helpful.`,
  },
  {
    fullName: 'Jerry Springsteen',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Great food and atmosphere!`,
  },
  {
    fullName: 'Dolores McDonald',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Food was so good delicious!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;