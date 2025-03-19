import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import {Heart, Home, Plus, Search, User} from 'lucide-react-native'

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"#0a7ea4",
        headerShown: false,
       
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon:({color,focused})=>(
            <Home color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon:({color,focused})=>(
            <Search color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="empty"
        options={{
          title: 'Post',
          tabBarIcon:({color,focused})=>(
            <Plus color={color} size={24} />
          )
        }}
        listeners={{
          tabPress:(e)=>{
            router.push('/post')
          }
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon:({color,focused})=>(
            <Heart color={color} size={24} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon:({color,focused})=>(
            <User color={color} size={24} />
          )
        }}
      />
     
    </Tabs>
  );
}
