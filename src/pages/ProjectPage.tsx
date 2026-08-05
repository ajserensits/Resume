import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectPage.css"; // Create a CSS file for styling if needed

interface Media {
  media: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  technicalDescription: string;
  media: Media[];
}

const projectData: Record<number, Project> = {
  1: {
    title: "AI Form Filler",
    description: "This project was for a customer that wanted an Agent Assist AI where information was automatically categorized into different buckets of information.  The agents take calls from people reporting child abuse, so the customer wanted their agents to be engaged in the conversation as opposed to spending a ton of time manually entering information.  The demo only shows 30ish pieces of information being collected, however the real use case has about 60+ pieces of information being collected.",
    technicalDescription: "The live transcript is something that was being exposed to my application, this application simply consumes it.  It takes the transcript and sends it to a backend service that interfaces with OpenAI.  There is a data model that is fed into OpenAI along with some prompt engineering which allows OpenAI to respond with a JSON object that represents the answers to the form information.  This allows the data to be automatically collected without much effort from the agent, of course if the AI does not collect certain pieces of data, then the agent can manually enter the information.  At the end of the call the information is sent to SalesForce via REST APIs.  One other important aspect to this is the OpenAI summary that is created in a specific format based on some prompt engineering.  I took this concept a step further by making it generic and creating an admin interface that allows an admin to define their own OpenAI data model as well as configure their own prompt engineering for the post call summary.  The user interface is written in React and is generic enough so that the data model drives the UI.  The video shows the UI before marketing gave me suggestions on how to make it prettier.  The below screenshots show the UI after these changes as well as the admin interface.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/Demo.mov",
        description: "Simulated demo of the solution",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/ui-update-1.png",
        description: "Updated UI with no information from conversation.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/ui-update-2.png",
        description: "Updated UI with information from conversation.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/ui-update-3.png",
        description: "Admin interface",
      }, 
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/ui-update-4.png",
        description: "Admin interface with category expansion",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/ui-update-5.png",
        description: "Admin interface with specific field editing",
      }
    ],
  },
  2: {
    title: "Digital Translation",
    description: "Enables a contact center agent to digitally communicate with customers that do not speak the same language as them.  Some agents are more expensive depending on the language they speak so this was a big cost saver.",
    technicalDescription: "Every time a message is sent from the agent side, the application will display it in the agent's language.  The message is then sent to Google Translate V3 to translate the message into the customer's language, and this message is then delivered to the customer.  The customer comes in on a certain queue which allows our application to know what language the customer speaks.  On the customer facing side, similar logic is applied however the only messages that are shown are the messages in the customer's language, whereas the agent can see both the translated and untranslated versions.  Both the translated and untranslated versions are saved to the transcript of the conversation to assist with reporting.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/DigitalTranslation/Agent-Customer.png",
        description: "Translated conversation between Spanish speaking agent and Italian speaking customer",
      }
    ],
  },
  3: {
    title: "Password Application",
    description: "This was a side project I created because I was sick of my family texting me asking for passwords to certain services.  It allows them to text into a certain number and then select a service they would like the password for.  Certain passwords are only available to certain people.  This application was only used with my family and then a few other friends and their families since they encounter similar issues.",
    technicalDescription: "This website was built with jQuery and Bootstrap for CSS.  All of the data is stored in a MySQL database that lives on my GoDaddy server.  The passwords are stored in an encrypted fashion and can only be decrypted with a certain combination of information.  Of course storing passwords in a decryptable way is deemed unsafe, but I trusted myself with this.  The backend is written in NodeJs and the SMS portion of the application is powered by Twilio.  Admin users are able to log in and add users to their accounts.  They are also able to add services and passwords to their account, and then assign certain people access to those services.  The admin is also able to dictate whether they want the password sent directly to the user when it is asked for, or have an authenticated link which is unlocked via a 6 digit auth code that is also sent via SMS.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/users.png",
        description: "Configure users on your account.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/access.png",
        description: "Configure access for each user on your account.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/admin.png",
        description: "Set the password delivery preference between secure link or SMS.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/sms-list.PNG",
        description: "Example interaction listing the services you have access to via SMS",
      }, 
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/sms-auth-token.PNG",
        description: "Auth token being sent to the user requesting a certain service",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/sms-auth-token-confirmed.PNG",
        description: "Auth token confirmation screen",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/PasswordApp/sms-password.PNG",
        description: "Post auth token screen where password is finally revealed",
      }
    ],
  },
  4: {
    title: "Salesforce Integrations",
    description: "When a call or chat comes into the contact center, relevant SalesForce data is pulled in and displayed to the agent.  This allows the agent to interface with SalesForce in one unified desktop as oppsed to having to open up another page in their browser and manually type in the contact information to look up the customer data.  The agent can then create, update, or delete certain SalesForce data.",
    technicalDescription: "A chat comes in with an associated email address, a call comes in with an associated phone number, in both scenarios a SalesForce contact is looked up and then the relevant Cases, Notes, and Opportunities are retrieved.  The agent can edit any of these data elements.  The application interfaces with SalesForce via REST APIs.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/Wynn/wynn-salesforce-v2.mov",
        description: "Example UI with very little styling, however it shows the different type of SalesForce objects that can be displayed as well as how they can be created, updated, and removed."
      }
    ],
  },
  5: {
    title: "Sentiment Analysis",
    description: "Two seperate web applications, one that allows an agent to see the average sentiment score of a conversation for a digital or voice interaction, as well as the current sentiment score of each utterance.  The supervisor of the agent is notified when the average sentiment score of a conversation dips below a certain threshold.  The supervisor is also able to see all of their agents' active and previous conversations as well as the average sentiment score of each conversation and the sentiment score for each utterance in the conversation.",
    technicalDescription: "These web applications are built in React.  The sentiment is computed by OpenAI by having these web applications send REST calls to OpenAI that tell OpenAI to respond with a specific JSON structure which represents the sentiment score for each utterance.  These sentiment scores are stored in a SQL database and have correlations to each agent as well as each conversation.  The average sentiment score is calculated based on aggregations of these sentiment scores.  The supervisor is notified of low scores via a WebSocket connection that is subscribing to scores of a certain threshold for the agents on their team.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/Sentiment/ajs-gpt-sentiment-new-accordion.mov",
        description: "Agent view of the customer's live sentiment scores.  Shows sentiment for current message as well as average sentiment.",
      },
      {
        media: "https://scriptingsolution.com/MyResumeImages/Sentiment/sentiment-supervisor-ui-updates.mov",
        description: "Supervisor view of sentiment application where they could see all past conversations that their agents have had as associated sentiment scores.  Also shows supervisor receiving live notification about a current bad agent sentiment score.",
      }
    ],
  },
  6: {
    title: "Virtual Agent",
    description: "A low-code platform that allows non-developers to build complex conversational experiences for voice and SMS interactions.  Voice supported both DTMF and speech inputs.  Building these interactions via APIs alone would require a ton of developmental experience and would take about 500% times longer.  These experiences are able to be attached to an Avaya ownded phone number which will route traffic to this application so that when customers call and text into these numbers, they are met with a specific conversation.  These conversational experiences can be multilingual.",
    technicalDescription: "This application was built in vanilla javascript combined with Bootstrap for CSS.  This application was able to connect with Google Dialogflow ES/CX to delegate the conversational experience and support a popular AI Conversational engine.  It interfaced with a scalable backend written in NodeJs that lived in a managed instance group in Google Cloud Platform (GCP).  Each Virtual Machine connected to a CloudSQL Database via a secure proxy.  This application started in North America but then grew out to Europe and Asia.  Europe has strict data laws so I had to make sure that each machine lived in certain regions and interacted with databases that also lived in certain regions.  This application would receive 50,000+ individual calls/SMS interactions every day.  One of the more complex things this application could do, which required some development experience, was to make webhook calls to your own URLs which would send specific data related to the call so that there could be a more customized experience for each caller and complex process could be implemented.  These webhook calls came back with some data that could be leveraged in the decision making process of these conversational experiences, this required me to write a lexical parser in order to evaluate these conditional expressions.",
    media: [
      {
        media: "https://scriptingsolution.com/MyResumeImages/VirtualAgent/VirtualAgentScreenRecording.mov",
        description: "Shows entire Virtual Agent application from configuring the conversation tree to assigning which other members have the ability to view your conversation tree.  Also shows reporting functionality and related documentation.",
      }
    ],
  },

};

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>() || {id: '1'};
  const project = projectData[parseInt(id)];

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const [isTechnicalDescriptionExpanded, setIsTechnicalDescriptionExpanded] = useState(false);

  const toggleTechnicalDescription = () => {
    setIsTechnicalDescriptionExpanded(!isTechnicalDescriptionExpanded);
  };

  const MAX_LENGTH = 250; // Max characters to show when truncated

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setIsExpanded(true);
  };

  const closeImage = () => {
    setIsExpanded(false);
    setCurrentImage(null);
  };


  if (!project) return <h1>Project Not Found</h1>;

  function getVideoElement(item: string, index: number) {
    if (item.endsWith(".mp4") ) {
      return (
        <video key={index} controls>
          <source src={item} type="video/mp4"  />
        </video>
      )
    }

    if (item.endsWith(".mov") ) {
      return (
        <video key={index} controls src={ item }>
        </video>
      )
    }

  }

  return (
    <div className="project-page-div">
      <Link to="/" className="back-link">Back to Projects</Link>
      <h1>{project.title}</h1>
      <h3>Use Case Description</h3>
      <p>
        {isDescriptionExpanded
          ? project.description
          : `${project.description.substring(0, MAX_LENGTH)}...`}
      </p>
      {project.description.length > MAX_LENGTH && (
        <button onClick={toggleDescription}>
          {isDescriptionExpanded ? "See Less" : "See More"}
        </button>
      )}
      <h3>Technical Description</h3>
      <p>
        {isTechnicalDescriptionExpanded
          ? project.technicalDescription
          : `${project.technicalDescription.substring(0, MAX_LENGTH)}...`}
      </p>
      {project.technicalDescription.length > MAX_LENGTH && (
        <button onClick={toggleTechnicalDescription}>
          {isTechnicalDescriptionExpanded ? "See Less" : "See More"}
        </button>
      )}
      <div className="media-container">
        {project.media.map((item, index) =>
          item.media.endsWith(".mp4") || item.media.endsWith(".mov") ? 
            <div className="media-div">
              { getVideoElement(item.media, index) }
              <p>
                { item.description }
              </p>
            </div>
          : (
            <div className="media-div">
              <img 
                key={index} 
                src={item.media} 
                alt={project.title}
                onClick={() => handleImageClick(item.media)}
                />
              <p>
                { item.description }
              </p>
            </div>
          )
        )}
      </div>
            {/* Full-Screen Image */}
        {isExpanded && currentImage && (
          <div className="overlay" onClick={closeImage}>
            <img src={currentImage} alt="Expanded" className="expanded-image" />
          </div>
        )};
    </div>
  );
};

export default ProjectPage;

