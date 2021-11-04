import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import { BiShapeCircle } from 'react-icons/bi';
import { MdRotate90DegreesCcw } from 'react-icons/md';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className={styles.container} variants={stagger}>
        {/* Homepage header container */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <h1 className={styles.title}>
            [<span id={styles.span}>Calculus</span>]
          </h1>
        </motion.div>

        {/* Grid row I - children = columns/cards */}
        <motion.div className={styles.grid} variants={fadeInUp}>

          {/* Link 1 - Rad/Deg converter */}
          <Link href='/convert'>
            <motion.div
              id={styles.col1}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MdRotate90DegreesCcw
                color='white'
                size='3rem'
              />
              <p className={styles.cta}>
                Converting Radians & Degrees
              </p>
            </motion.div>
          </Link>

           {/* Link 2 - Matrix displacement solver */}
           <Link href='/unit-circle'>
            <motion.div
              id={styles.col1}
              variants={fadeInUp}
              className='uk-width-1-2'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <BiShapeCircle
                color='white'
                size='3rem'
              />
              <p className={styles.cta}>
                The Unit Circle
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
