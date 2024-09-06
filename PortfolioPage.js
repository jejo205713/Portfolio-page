import React from 'react';

// Portfolio page component
const PortfolioPage = () => {
  return (
      <div className="App">
        <h1 align="center">Hi 👋, I'm JEJO.J</h1>
  
        {/* namla pathi  */}
        <section style={{
          maxWidth: '900px',
          margin: '40px auto',
          padding: '0 20px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>About Me</h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#FFFFFF',
            textAlign: 'justify',
            marginBottom: '20px',
          }}>
            I am an 18-year-old pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Cybersecurity at Sri Krishna College of Technology. I have a solid foundation in Linux system administration, penetration testing, and networking. I run <strong>"Computer Kadai"</strong>, a business focused on installing operating systems and recovering data, which has honed my practical skills and customer service.
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#FFFFFF',
            textAlign: 'justify',
            marginBottom: '20px',
          }}>
            My internship as a Penetration Tester at Jagex Limited involved identifying and resolving vulnerabilities in gaming systems. I enjoyed collaborating with development teams to enhance security. I am passionate about technology, contributing to open-source projects on GitHub, and proficient in tools like <strong>Burp Suite</strong>, <strong>Metasploit</strong>, and <strong>Wireshark</strong>.
          </p>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#FFFFFF',
            textAlign: 'justify',
          }}>
            I have also served as College President and School Pupil Leader, engaging with peers, organizing events, and representing the student body. I am eager to continue learning and growing in cybersecurity.
          </p>
        </section>

      {/* img machi */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', maxWidth: '900px', margin: '40px auto' }}>
        {[
          "https://media.licdn.com/dms/image/v2/D5622AQHTzPtlljnDsQ/feedshare-shrink_800/feedshare-shrink_800/0/1725009826307?e=1728518400&v=beta&t=MmCz204oUgi2t30338GehUO7SJYq7j3KgduoVDdyJXE",
          "https://media.licdn.com/dms/image/v2/D5622AQGAPyBhDoQOHw/feedshare-shrink_800/feedshare-shrink_800/0/1709130005379?e=1728518400&v=beta&t=9muz2iPXxzsYQZIyD0cwJ2RUC_MVDwoo_zPUxveGeww",
          "https://media.licdn.com/dms/image/v2/D5622AQHw2rbz1GIhNA/feedshare-shrink_1280/feedshare-shrink_1280/0/1709130006887?e=1728518400&v=beta&t=dT-j8EnybCN2waRJYTM2e694TBWFxaa2UircPyy7prA",
          "https://media.licdn.com/dms/image/v2/D5622AQHhieTk-LLeFg/feedshare-shrink_800/feedshare-shrink_800/0/1708594329925?e=1728518400&v=beta&t=uaxIm4c43I7DBWxZBSUTJ9-eLe7VEZKLi8LVepbNPWg",
          "https://media.licdn.com/dms/image/v2/D5622AQHnZuDa583UsQ/feedshare-shrink_800/feedshare-shrink_800/0/1725009827311?e=1728518400&v=beta&t=gCKE-vKUx0rhT09MMdo52GWQ3Kt4HOtuKASJE3mDTMw",
          "https://media.licdn.com/dms/image/v2/D5622AQGWK8ZjkWAJjw/feedshare-shrink_800/feedshare-shrink_800/0/1725009825949?e=1728518400&v=beta&t=Z0OWVgQOuE5Ptq1YcVovzalEzBDGfylPKThOSRtjzEA",
          "https://media.licdn.com/dms/image/v2/D5622AQEWEbZV3PSq0Q/feedshare-shrink_800/feedshare-shrink_800/0/1709130005348?e=1728518400&v=beta&t=VyqJzdVfbQlBKNvNMDRGhRlb9wE9J4mIL8gzq3eLl48",
          "https://media.licdn.com/dms/image/v2/D5622AQHfZUIcbEe0tA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1711540915249?e=1728518400&v=beta&t=HCTwc0K1If-IqmGY2w_vMmU_atttfR6XgumwzyYrldg"
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        ))}
      </div>

      {/* Git & linkdn profile */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {[
          { name: 'GitHub Profile', url: 'https://github.com/jejo205713', imgSrc: 'https://github.com/jejo205713/jejo205713/blob/main/git.png?raw=true' },
          { name: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/jejo-j/', imgSrc: 'https://github.com/jejo205713/jejo205713/blob/main/Screenshot%20from%202024-09-06%2011-05-31.png?raw=true' }
        ].map(profile => (
          <div key={profile.name} style={{ textAlign: 'center' }}>
            <h3>{profile.name}</h3>
            <a href={profile.url} target="_blank" rel="noopener noreferrer">
              <img
                src={profile.imgSrc}
                alt={profile.name}
                style={{ width: '250px', height: 'auto', borderRadius: '8px', margin: '10px' }}
              />
            </a>
          </div>
        ))}
      </div>

      {/* footer bruh blahhh */}
      <footer style={{ padding: '20px', textAlign: 'center' }}>
        <p>
          <a href="https://www.linkedin.com/in/jejo-j/">
            <img alt="LinkedIn badge" title="LinkedIn Profile" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
          </a>
          <a href="https://github.com/jejo205713">
            <img alt="Portfolio badge" title="Portfolio" src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139"/>
          </a>
          <a href="https://www.instagram.com/_jejo_j">
            <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
          </a>
        </p>

        {/* tecg stack */}
        <div style={{ marginTop: '20px' }}>
          <h2>💻 Tech Stack and Tools:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {[
              { src: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white', alt: 'C' },
              { src: 'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white', alt: 'C++' },
              { src: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white', alt: 'Java' },
              { src: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54', alt: 'Python' },
              { src: 'https://img.shields.io/badge/Electron-2A2D38?style=for-the-badge&logo=Electron&logoColor=lightblue', alt: 'Electron.js' },
              { src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'React' },
              { src: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white', alt: 'MySQL' },
              { src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white', alt: 'MongoDB' },
              { src: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white', alt: 'Git' },
              { src: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white', alt: 'GitHub' },
              { src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white', alt: 'NodeJS' }
            ].map(tool => (
              <img
                key={tool.alt}
                src={tool.src}
                alt={tool.alt}
                style={{ height: '40px' }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;

/*avlothan */
