import FollowCard from 'components/FollowCard/FollowCard';
import InfoCard from 'components/InfoCard/InfoCard';
import LogoSearch from 'components/LogoSearch/LogoSearch';
import React from 'react';

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowCard />
    </div>
  );
};

export default ProfileLeft;
