import React, { useState } from 'react';
// Type
import type { ServerList, Server } from '@/types';

interface HomePageProps {
  onSelectServer: (serverId: string) => void;
  onOpenCreateServer: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onSelectServer,
  onOpenCreateServer,
}) => {
  const [rencentServerList, setRecentServerList] = useState();
  const [myServerList, setMyServerList] = useState();
  const myId = '123456789000';

  const recentVisits: ServerList = {
    '1725': {
      id: '1725',
      name: '●●●● ※Purely 米糊糊 ...',
      icon: '/api/placeholder/48/48',
      announcement: '勿忘初衷、黑純將你的那個自己...',
      level: 0,
      userIds: [myId],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '26531753': {
      id: '26531753',
      name: '【C8 Online 】InFinTe',
      icon: '/api/placeholder/48/48',
      announcement: '申請會員請告知你的ID謝...',
      level: 0,
      userIds: [myId],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '27100337': {
      id: '27100337',
      name: '黑夜kmiko私人工作室',
      icon: '/api/placeholder/48/48',
      announcement: '',
      level: 0,
      userIds: [],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '27100881': {
      id: '27100881',
      name: 'Disillusionment小居服幻博誌',
      icon: '/api/placeholder/48/48',
      announcement: '',
      level: 0,
      userIds: [],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '27315392': {
      id: '27315392',
      name: '永恆-Night Star☆彡',
      icon: '/api/placeholder/48/48',
      announcement: '創建中',
      level: 0,
      userIds: [],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '27349728': {
      id: '27349728',
      name: '一一* InFinitely☆彡',
      icon: '/api/placeholder/48/48',
      announcement: '',
      level: 0,
      userIds: [],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
    '123456789': {
      id: '123456789',
      name: '543隨你聊',
      icon: '/api/placeholder/48/48',
      announcement: '',
      level: 0,
      userIds: [myId],
      channelIds: [],
      createdAt: 1738758855886,
      applications: {},
      permissions: {},
      nicknames: {},
      contributions: {},
      joinDate: {},
    },
  };

  const myGroups = Object.entries(recentVisits).reduce((acc, [id, server]) => {
    if (server.userIds.includes(myId)) {
      acc[id] = server;
    }
    return acc;
  }, {} as ServerList);

  const renderServer = (server: Server) => (
    <button
      key={`server-${server.id}`}
      className="flex items-start gap-3 p-3 border border-gray-200 rounded bg-white hover:bg-gray-50"
      onClick={() => onSelectServer(server.id)}
    >
      <img src="/logo_server_def.png" alt="" className="w-14 h-14 rounded" />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-[#4A6B9D] text-start truncate">
          {server.name}
        </h3>
        <p className="text-xs text-gray-500 text-start ">ID:{server.id}</p>
        {server.announcement && (
          <p className="text-xs text-gray-500 text-start truncate">
            {server.announcement}
          </p>
        )}
      </div>
    </button>
  );

  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-8 py-2">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="輸入群ID或群名稱"
                className="w-48 h-6 px-2 pr-8 border border-gray-200 rounded text-sm focus:border-blue-500 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <img
                  src="/icon_widgetsearch.png"
                  alt="search"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              className="text-gray-600 hover:text-gray-900 text-sm cursor-pointer"
              onClick={onOpenCreateServer}
            >
              創建語音群
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-1 min-h-0 bg-gray-100">
        <div className="flex flex-1 flex-col item-center space-y-6 p-8 overflow-y-auto">
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3">最近訪問</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Object.values(recentVisits).map((item) => renderServer(item))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">我的語音群</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Object.values(myGroups).map((item) => renderServer(item))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
