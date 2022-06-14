import FollowCard from 'components/FollowCard/FollowCard';
import LogoSearch from 'components/LogoSearch/LogoSearch';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import React from 'react';
import './ProfileSide.scss';
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowCard />
    </div>
  );
};

export default ProfileSide;
