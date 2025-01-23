export interface Service {
    id: string
    name: string
    description: string
    price: number
    duration: string
  }
  
  export const services: Service[] = [
    {
      id: "1",
      name: "Yoga Class",
      description: "A 60-minute yoga session for all levels",
      price: 15,
      duration: "60 min",
    },
    {
      id: "2",
      name: "Personal Training",
      description: "One-on-one fitness training session",
      price: 50,
      duration: "45 min",
    },
    {
      id: "3",
      name: "Meditation Workshop",
      description: "Learn meditation techniques in a group setting",
      price: 25,
      duration: "90 min",
    },
    {
      id: "4",
      name: "Nutrition Consultation",
      description: "Personalized nutrition advice from a certified dietitian",
      price: 75,
      duration: "60 min",
    },
    {
      id: "5",
      name: "Group Cycling",
      description: "High-intensity indoor cycling class",
      price: 20,
      duration: "45 min",
    },
    {
      id: "6",
      name: "Gita Class",
      description: "A 1hrs/day Gita session for all levels (1 week)",
      price: 108,
      duration: "60 min",
    },
  ]
  
  