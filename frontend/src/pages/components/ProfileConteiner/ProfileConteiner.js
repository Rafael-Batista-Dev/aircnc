import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ProfileSection,
  ProfileTitle,
  SpotUl,
  SpoLi,
  SpoHeader,
  SpoStrong,
  SpoSpan,
  Card,
  SpotButtom,
} from "./style";

import api from "../../../services/api";

const ProfileConteiner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("profile", {
        headers: { user_id },
      });

      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <>
      <ProfileSection>
        <ProfileTitle>Perfil</ProfileTitle>

        <SpotUl>
          {spots.map((spot) => (
            <Card>
              <SpoLi data-aos="fade-in" key={spot._id}>
                <SpoHeader
                  style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
                />
                <SpoStrong>{spot.company}</SpoStrong>
                <br />
                <SpoSpan>
                  {spot.price ? `R$ ${spot.price} / dia` : `GRATUITO`}
                </SpoSpan>
              </SpoLi>
            </Card>
          ))}
        </SpotUl>

        <SpotButtom>+</SpotButtom>
      </ProfileSection>
    </>
  );
};

export default ProfileConteiner;
