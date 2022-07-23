import React, { Component } from "react";
import Header from "../common/Header/Header";
import s from "./Profile.module.css";
import image from "../../images/brain.png";
import Button from "../common/Button/Button";

class Profile extends Component {
  render() {
    const {
      // name,
      // surname,
      birthDate,
      phone,
      website,
      about,
      technologies,
      lastProject,
    } = this.props.data;
    console.log();
    return (
      <>
        <div className={s.wrap}>
          {/* <Header text={`${name} ${surname}`} /> */}
          <Header text="Борисенко Екатерина" />
          <img src={image} className={s.image} alt="brain" />

          <table>
            <tr>
              <td>Дата рождения</td>
              <td>10.02.1993</td>
            </tr>
            <tr>
              <td>Телефон</td>
              <td>7-7777-77-77</td>
            </tr>
            <tr>
              <td>Сайт</td>
              <td>https://my-website.com</td>
            </tr>
            <tr>
              <td>О себе</td>
              <td>I'm Software Engineer</td>
            </tr>
            <tr>
              <td>Стек технологий</td>
              <td>CSS HTML JS React Node.js Express Mongo DB</td>
            </tr>
            <tr>
              <td>Описание последнего проекта</td>
              <td>This project is the last</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default Profile;
