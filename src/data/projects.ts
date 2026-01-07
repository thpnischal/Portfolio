// Import project images
import project1Image from '../assets/project1.jpg'
import project2Image from '../assets/project2.jpg'

export interface Project {
  id: number
  title: string
  desc: string
  tools: string[]
  category?: string
  image?: string
}

export const allProjects: Project[] = [
  {title: 'SAE Efficycle', desc: 'Designed and fabricated an electrically-assisted 3-wheeled, 2-seater human-powered vehicle focused on sustainable mobility', tools: ['Assembly', 'SolidWorks','Technical Documentation'], id: 1, category: 'Efficcle', image: project1Image},
  {title: 'Abrasive Jet Machining(AJM)', desc: 'Designed and built an in-house tabletop AJM setup and conducted experiments on Zirconia to analyze how different parameters influence the material removal rate (MRR).', tools: ['Machine Design', 'Data Collection', 'Analsis'], id: 2, category: 'Mechanical Design', image: project2Image},
  {title: 'Thermal Analysis Study', desc: 'Comprehensive thermal performance simulations for industrial applications', tools: ['ANSYS','MATLAB'], id: 3, category: 'Analysis'},
  {title: 'HVAC System Design', desc: 'Complete HVAC system design for commercial building with energy efficiency focus', tools: ['AutoCAD', 'Revit', 'ANSYS'], id: 4, category: 'HVAC'},
  {title: 'Pressure Vessel Analysis', desc: 'Structural analysis and design optimization of pressure vessels', tools: ['ANSYS', 'SolidWorks'], id: 5, category: 'Analysis'},
  {title: 'Pump System Optimization', desc: 'Performance optimization of centrifugal pump systems', tools: ['MATLAB', 'SolidWorks'], id: 6, category: 'Fluid Systems'},
  {title: 'Material Selection Study', desc: 'Comprehensive material selection for high-temperature applications', tools: ['MATLAB'], id: 7, category: 'Materials'},
  {title: 'CAD Assembly Design', desc: 'Complex multi-component assembly design with manufacturing considerations', tools: ['SolidWorks', 'AutoCAD'], id: 8, category: 'Mechanical Design'},
  {title: 'Finite Element Analysis', desc: 'FEA studies for stress analysis and structural optimization', tools: ['ANSYS', 'SolidWorks'], id: 9, category: 'Analysis'},
]

