import React, { useEffect, useState, useMemo } from "react";
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
  Notifications,
  NotifiLi,
  ButtonAccept,
  ButtonReject,
} from "./style";

import socketio from "socket.io-client";

import api from "../../../services/api";

const ProfileConteiner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem("user");
  const socket = useMemo(
    () =>
      socketio("http://localhost:3333", {
        query: { user_id },
      }),
    [user_id]
  );

  useEffect(() => {
    socket.on("booking_request", (data) => {
      setRequests([...requests, data]);
    });
  }, [requests, socket]);

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

  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`);

    setRequests(requests.filter((request) => request._id !== id));
  }
  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`);

    setRequests(requests.filter((request) => request._id !== id));
  }

  return (
    <>
      <ProfileSection>
        <Notifications className="notifications">
          {requests.map((request) => (
            <NotifiLi key={request._id}>
              <p>
                <strong>{request.user.email}</strong> está solicitando uma
                reserva em <strong>{request.spot.company}</strong> para a data:{" "}
                <strong>{request.date}</strong>
              </p>
              <ButtonAccept
                className="accept"
                onClick={() => handleAccept(request._id)}
              >
                ACEITAR
              </ButtonAccept>
              <ButtonReject
                className="reject"
                onClick={() => handleReject(request._id)}
              >
                REJEITAR
              </ButtonReject>
            </NotifiLi>
          ))}
        </Notifications>
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
