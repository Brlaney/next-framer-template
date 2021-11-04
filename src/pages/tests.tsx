import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import GoBack from '@/components/GoBack';
import { BiShapeCircle } from 'react-icons/bi';
import styles from '@/styles/pages/Tests.module.scss';

const Tests = () => {
  const endpoint = '/';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.parent} variants={stagger}>

        {/* Header */}
        <motion.h2 className={styles.header} variants={fadeInUp}>
          Welcome, to the test page
        </motion.h2>

        <motion.div className={styles.box} variants={fadeInUp}>
          Box
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Tests;
