import Image from 'next/legacy/image'

import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/avatar.png'
          alt='An image showing Running Snail'
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hi, I am Running Snail.</h1>
      <p>I blog about web development.</p>
    </section>
  )
}

export default Hero
