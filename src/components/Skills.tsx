import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function Skills() {
  const operatingsystem = ['Linux(RHEL)', 'Windows', 'VMware', 'Citrix', 'Hyper-V'];
  const CICD = ['Git', 'Maven', 'GitHub Actions', 'Jenkins'];
  const toolsSkills = [ 'Docker', 'Kubernetes'];
  const automationSkills = ['Terraform', 'Ansible'];
  const cloudSkills = ['AWS', 'Azure'];
  const programmingSkills = ['C', 'C++', 'Python', 'Bash Scripting'];

  const technicalProficiency = [{
    skill: 'Linux',
    percentage: 90
  }, {
    skill: 'Kubernetes',
    percentage: 70
  }, {
    skill: 'Cloud (AWS/Azure)',
    percentage: 70
  }, {
    skill: 'Python',
    percentage: 75
  }, {
    skill: 'CI/CD',
    percentage: 70
  }];
  return <section id="skills" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Operating Systems & Virtualization" skills={operatingsystem} />
          <SkillCategory title="Source Control & Build Automation" skills={CICD} />
          <SkillCategory title="Containerization & Orchestration" skills={toolsSkills} />
          <SkillCategory title="Cloud Platforms" skills={cloudSkills} />
          <SkillCategory title="Programming & Scripting" skills={programmingSkills} />
          <SkillCategory title="Automation & IaC" skills={automationSkills} />
        </div>
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-center mb-12 text-gray-700">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {technicalProficiency.map((item, index) => <DonutChart key={index} skill={item.skill} percentage={item.percentage} color={`hsl(${25 + index * 5}, 85%, ${60 - index * 3}%)`} />)}
          </div>
        </div>
      </div>
    </section>;
}
function SkillCategory({
  title,
  skills
}) {
  return <div className="bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6 text-gray-700 pb-2 border-b border-gray-200/70">
        {title}
      </h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => <li key={index} className="flex items-center">
            <CheckCircleIcon size={18} className="text-orange-500 mr-2" />
            <span className="text-gray-700">{skill}</span>
          </li>)}
      </ul>
    </div>;
}
function DonutChart({
  skill,
  percentage,
  color
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - percentage / 100 * circumference;
  return <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-full -m-2"></div>
        {/* SVG Donut Chart */}
        <svg width="120" height="120" viewBox="0 0 120 120" className="transform -rotate-90">
          {/* Background circle */}
          <circle cx="60" cy="60" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
          {/* Progress circle */}
          <circle cx="60" cy="60" r={radius} stroke={color} strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" fill="none" className="transition-all duration-1000 ease-out" />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
      <span className="mt-4 text-center text-gray-700 font-medium">
        {skill}
      </span>
    </div>;
}