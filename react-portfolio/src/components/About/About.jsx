import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                 <img src={getImageUrl("about/aboutImage.png")} alt="Me" className={styles.aboutImage}/>
                 <ul className={styles.Items}>
                     <li className={styles.item} >
                         <img src={getImageUrl("about/cursorIcon.png")} alt="UI" />
                         <span>
                             <h3>Frontend Developer</h3>
                             <p>I'm a Frontend developer with experience in building interfaces to some projects.</p>
                         </span>
                     </li>
                     <li className={styles.item}>
                         <img src={getImageUrl("about/serverIcon.png")} alt="" />
                         <span>
                             <h3>Frontend Developer</h3>
                             <p>I'm a Frontend developer with experience in building interfaces to some projects.</p>
                         </span>
                     </li>
                     <li className={styles.item}>
                         <img src={getImageUrl("about/uiIcon.png")} alt="" />
                         <span>
                             <h3>Frontend Developer</h3>
                             <p>I'm a Frontend developer with experience in building interfaces to some projects.</p>
                         </span>
                     </li>
                 </ul>
             </div>
        </section>
        
    )
}