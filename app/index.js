import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.title}>John Doe</h1>
          <p className={styles.description}>Web Developer & Designer</p>
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
            <div className={styles.bio}>
              <p>Hello! I'm a passionate web developer with 5 years of experience...</p>
              <p>My skills include:</p>
              <ul className={styles.skillsList}>
                <li>JavaScript (React, Next.js)</li>
                <li>HTML/CSS</li>
                <li>Node.js</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>My Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <h3>E-commerce Website</h3>
              <p>A full-stack e-commerce platform built with Next.js and Stripe.</p>
              <a href="#" className={styles.projectLink}>View Project</a>
            </div>
            <div className={styles.projectCard}>
              <h3>Portfolio Template</h3>
              <p>A responsive portfolio template for creatives.</p>
              <a href="#" className={styles.projectLink}>View Project</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" className={styles.formTextarea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}