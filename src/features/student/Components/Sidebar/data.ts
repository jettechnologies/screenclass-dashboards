import dashboardIcon from "../../assets/welcome-icons.png";
// import myClassIcon from "../../assets/my-class-icon.png";
import subjectIcon from "../../assets/subjects-icon.png";
import quizIcon from "../../assets/quiz-icon.png";
import subscriptionIcon from "../../assets/subscriptions-icon.png";
import triviaIcon from "../../assets/trivia.png";
import gamesIcon from "../../assets/games-icon.png";
import profileIcon from "../../assets/my-profile-icon.png";

export const sidebarItems = [
  {
    link: "/student",
    image: dashboardIcon,
    text: "Dashboard",
  },
  // {
  //   link: "/student/my-class",
  //   image: myClassIcon,
  //   text: "My Class",
  // },
  {
    link: "/student/subjects",
    image: subjectIcon,
    text: "My Subjects",
  },
  {
    link: "/student/take-quiz",
    image: quizIcon,
    text: "Take Quiz",
  },
  {
    link: "/student/subscribe",
    image: subscriptionIcon,
    text: "Subscripitions",
  },
  {
    link: "#",
    image: triviaIcon,
    text: "Trivia",
    isComingSoon: true,
  },
  {
    link: "#",
    image: gamesIcon,
    text: "Games",
    isComingSoon: true,
  },
  {
    link: "/student/profile",
    image: profileIcon,
    text: "My Profile",
  },
];
