import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/utils/animations';
import GoBack from '@/components/GoBack';
import styles from '@/styles/pages/Pages.module.scss';

const UnitCircle = () => {
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
          The Unit Circle
        </motion.h2>

        <motion.div className={styles.box} variants={fadeInUp}>
          Box
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default UnitCircle;
