import React from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import PricingTable from './PricingTable';
import Card from './Card';
import BlogPost from './BlogPost';
import { getToken, onMessage } from '../firebase/messaging';
import { messaging } from '../firebase';
import ButtonGroup from './ButtonGroup';
import ContactForm from './ContactForm';
import { useEffect } from 'react';


const stats = [
  { title: 'Total Sales', value: '$10,000' },
  { title: 'Users', value: '1,200' },
  { title: 'Active Projects', value: '32' },
];

const tableData = [
  { name: 'Project 1', status: 'Active', dueDate: '2025-05-12' },
  { name: 'Project 2', status: 'Completed', dueDate: '2025-03-30' },
  { name: 'Project 3', status: 'Pending', dueDate: '2025-06-18' },
  { name: 'Project 4', status: 'Active', dueDate: '2025-04-22' },
];

const Dashboard = () => {
  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log(' Notification permission granted.');
        try {
          
          const token = await getToken(messaging, {
            vapidKey: 'BPWM6MlQzs6VCJ4-2MJiNruz8XNuOpuckctXPRgLGPgtgzfy-NIVZIUXPdw0vA0nWY8HeM2z8X4jOU487p3v7mw', // Replace this with your actual key from Firebase
          });
          console.log('📱 FCM Token:', token);
        } catch (err) {
          console.error(' Error getting FCM token:', err);
        }
      } else {
        console.warn(' Notification permission denied');
      }
    };
  
    requestPermission();
  
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('📬 Foreground message received:', payload);
      alert(`${payload.notification.title}\n${payload.notification.body}`);
    });
  
    return () => unsubscribe();
  }, []);
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>Home</li>
          <li>Projects</li>
          <li>Sales</li>
          <li>Users</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Project Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.status}</td>
                  <td className="px-4 py-2">{row.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Gallery/>
        <PricingTable/>
        <Card/>
        <BlogPost/>
        <ContactForm/>
        <ButtonGroup/>
      </main>
    </div>
    </>
  );
};

export default Dashboard;