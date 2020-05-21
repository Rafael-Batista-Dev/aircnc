import React, { useEffect, useState } from "react";

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

function ProfileConteiner() {
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
              <SpoLi key={spot._id}>
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
}

export default ProfileConteiner;
