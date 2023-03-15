
import {FiUsers, FiGlobe, FiHome, FiSearch } from 'react-icons/fi';
import { theme } from '@chakra-ui/pro-theme';
import { theme as baseTheme, extendTheme } from '@chakra-ui/react';
import { GiOrganigram } from 'react-icons/gi';
import { DashboardConfig } from '@solo-system/dashboard';
import { FaWpforms } from 'react-icons/fa';

export const JWT_KEY = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '_admin_jwt';

export const THEME_CONFIG = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  theme,
);

export const DASHBOARD_CONFIG:DashboardConfig = {
    brand:'/brand_white.png',
    search: FiSearch,
    menu:{
        top:[
      {
        href:'/home',
        label: 'Home',
        icon:FiHome
      },
      {
        href:'/users',
        label: 'Users',
        icon:FiUsers
      },
      {
        href:'/websites',
        label: 'Websites',
        icon: FiGlobe
      },
    ],
    bottom:[]
  }
}