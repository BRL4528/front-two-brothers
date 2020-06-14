import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdPerson } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Profile, Content } from './styles';

export default function HeaderAdm() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Two Brothers" />
          <Link to="/dashboardadm">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
            <MdPerson />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
