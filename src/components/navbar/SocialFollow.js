import React from "react";
import classes from "./SocialFollow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className={classes.social_container}>
      <a className={classes.youtube}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a className={classes.facebook}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a className={classes.twitter}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://discord.gg/gt9wtGhv" className={classes.discord}>
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
    </div>
  );
}
