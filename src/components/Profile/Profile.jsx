import React, { Component } from "react";
import Header from "../common/Header/Header";
import s from "./Profile.module.css";
import image from "../../images/brain.png";

class Profile extends Component {
  render() {
    const {
      name,
      surname,
      birthDate,
      phone,
      website,
      about,
      technologies,
      lastProject,
    } = this.props.data;

    return (
      <>
        <div className={s.wrap}>
          <Header text={`${name} ${surname}`} />
          <img src={image} className={s.image} alt="brain" />
          <table>
            <tbody>
              <tr>
                <td>Дата рождения</td>
                <td>{birthDate}</td>
              </tr>
              <tr>
                <td>Телефон</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Сайт</td>
                <td>{website}</td>
              </tr>
              <tr>
                <td>О себе</td>
                <td>{about}</td>
              </tr>
              <tr>
                <td>Стек технологий</td>
                <td>{technologies}</td>
              </tr>
              <tr>
                <td>Описание последнего проекта</td>
                <td>{lastProject}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Profile;
