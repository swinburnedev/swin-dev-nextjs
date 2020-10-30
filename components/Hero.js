import Image from 'next/image';

const Hero = ({src, alt, height, width}) => (
  <div className="hero">
    <Image
      className="hero__image"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </div>
)

export default Hero;
