import React from 'react';
import webDevelopment from '../../assets/services/web-development.png'
import Service from './Service';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Web development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment

    },
    {
      id: 2,
      name: 'Public Relations (PR)',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment
    },
    {
      id: 3,
      name: 'Influencer Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment
    },
    {
      id: 4,
      name: 'Graphic Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment
    },
    {
      id: 5,
      name: 'Social Media',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment
    },
    {
      id: 6,
      name: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum veritatis nobis rerum porro quae sunt dolor quo autem enim.',
      img: webDevelopment
    },
  ]
  return (
    <div id="services" className='my-20 container mx-5 md:mx-auto'>
      <div className='w-1/2 mx-auto text-center'>
        <h2 className='text-4xl font-semibold my-5'>Our Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus ab similique fuga eveniet assumenda aliquid ratione neque vel nihil.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
        {
          services.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;