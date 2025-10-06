"use client";

import React from "react";

interface AgentPerformance {
  name: string;
  callsHandled: number;
  avgRating: number;
  avgHandleTime: string;
  resolutionRate: number;
  status: "excellent" | "good" | "needs-improvement";
}

const agentPerformances: AgentPerformance[] = [
  {
    name: "AI Agent Alpha",
    callsHandled: 1247,
    avgRating: 4.8,
    avgHandleTime: "2m 15s",
    resolutionRate: 89.2,
    status: "excellent"
  },
  {
    name: "AI Agent Beta",
    callsHandled: 892,
    avgRating: 4.6,
    avgHandleTime: "2m 42s",
    resolutionRate: 85.7,
    status: "good"
  },
  {
    name: "AI Agent Gamma",
    callsHandled: 634,
    avgRating: 4.2,
    avgHandleTime: "3m 18s",
    resolutionRate: 78.3,
    status: "needs-improvement"
  }
];

export default function AgentPerformance() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "good": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "needs-improvement": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return "🏆";
      case "good": return "👍";
      case "needs-improvement": return "📈";
      default: return "❓";
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Agent Performance
        </h3>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {agentPerformances.map((agent, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                  {agent.name.split(' ')[2]}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {agent.name}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{agent.callsHandled} calls</span>
                    <span>⭐ {agent.avgRating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {agent.avgHandleTime}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    avg time
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {agent.resolutionRate}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    resolved
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg">{getStatusIcon(agent.status)}</span>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(agent.status)}`}>
                    {agent.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary */}
      <div className="mt-6 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">
              Team Performance
            </p>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              84.4%
            </p>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Average Resolution Rate
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Top Performer
            </p>
            <p className="font-medium text-indigo-900 dark:text-indigo-100">
              AI Agent Alpha
            </p>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              89.2% resolution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
