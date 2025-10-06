"use client";

import React from "react";

export default function QualityMetrics() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Quality Metrics
        </h3>
        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
          View Details
        </button>
      </div>

      {/* Quality Score */}
      <div className="mb-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-900 dark:to-emerald-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-green-600 dark:text-green-400">Overall Quality Score</p>
            <p className="text-4xl font-bold text-green-700 dark:text-green-300">87.5</p>
            <p className="text-sm text-green-600 dark:text-green-400">out of 100</p>
          </div>
          <div className="text-6xl">⭐</div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-600 dark:text-green-400">Excellent</span>
            <span className="text-green-600 dark:text-green-400">+3.2 points this week</span>
          </div>
          <div className="mt-2 h-2 bg-green-200 rounded-full dark:bg-green-800">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '87.5%' }}></div>
          </div>
        </div>
      </div>

      {/* Quality Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Customer Satisfaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">4.7/5</span>
            <span className="text-xs text-green-600">+0.3</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Call Quality</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">92.1%</span>
            <span className="text-xs text-blue-600">+2.1%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Compliance Adherence</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">98.5%</span>
            <span className="text-xs text-purple-600">+0.5%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Script Adherence</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900 dark:text-white">85.3%</span>
            <span className="text-xs text-yellow-600">-1.2%</span>
          </div>
        </div>
      </div>

      {/* Recent Quality Alerts */}
      <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
        <div className="flex items-center space-x-2">
          <span className="text-red-600 dark:text-red-400">⚠️</span>
          <p className="text-sm font-medium text-red-700 dark:text-red-300">
            Quality Alert
          </p>
        </div>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          Script adherence below target for Agent Gamma. Review needed.
        </p>
        <p className="mt-2 text-xs text-red-500 dark:text-red-400">
          Alert triggered 2 hours ago
        </p>
      </div>
    </div>
  );
}
