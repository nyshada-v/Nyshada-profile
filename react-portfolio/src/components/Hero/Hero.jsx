import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';
export const Hero = ()=>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nyshada Vuddanti</h1>
                <p className={styles.description}>I'm a full-stack developer using MERN stack</p>
                <a className={styles.contactBtn} href="nyshu2006@gmail.com">Contact me</a>
            </div>
            <img src={getImageUrl("hero/profImg.jpg")} className={styles.heroImg} alt="Image of me" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}