import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import {
  BsCalendarPlus,
  BsCardList,
  BsInfoSquare
} from 'react-icons/bs';
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
            <span id={styles.span}>NextJs Framer</span> Template
          </h1>
        </motion.div>

        {/* Grid row I - children = columns/cards */}
        <motion.div className={styles.grid} variants={fadeInUp}>

          {/* Link 1 - Services page */}
          <Link href='/services'>
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
              <BsCardList
                color='white'
                size='2.25rem'
              />
              <p className={styles.cta}>
                Services we provide
              </p>
            </motion.div>
          </Link>

           {/* Link 2 - Schedule page */}
           <Link href='/schedule'>
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
              <BsCalendarPlus
                color='white'
                size='2.25rem'
              />
              <p className={styles.cta}>
                Schedule a meeting
              </p>
            </motion.div>
          </Link>

           {/* Link 3 - About page */}
           <Link href='/schedule'>
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
              <BsInfoSquare
                color='white'
                size='2.25rem'
              />
              <p className={styles.cta}>
                Learn more about us
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};
