import profilePic from "../assets/images/profile.png"

function About() {
  return (
    <section>
      <div className="about">
        <h1>About</h1>
      </div>

      <div className="profile">
        <img
          src={profilePic}
        />
      </div>

      <div className="summary">
        <p>
          My name is Erik Aku, I live in sunny San Diego where I enjoy being
          outdoors and in the water. My hobbies are surfing, paddle boarding,
          fishing, volleyball, and golf. I enjoy spending time with my family
          and babysitting my niece and nephews. I have been in the tech industry
          for 12 years where I worked as a Programmer Analyst in local
          government where I provided Enterprise Application Support for City
          staff and Police Department. After spending 10 years in the public
          sector, I became an Associate Software Engineer at a company called
          One Medical where I enhance and maintain our Enterprise and Consumer
          Registration flows. Tech Stack: javaScript, React, Ruby, Rails,
          AngularjS AWS S3, AWS EC2, AWS Lambda, GraphQL, MySQL
        </p>
      </div>
    </section>
  );
}

// export about
export default About;
