import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prisma/prisma";

async function createProject(req: NextApiRequest, res: NextApiResponse) {
    const { title, description, startDate, endDate, members } = req.body;
    const project = await prisma.project.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        members: {
          connect: members.map((memberId: number) => ({ id: memberId })),
        },
      },
    });
    res.status(201).json(project);
  }


  async function getProjects(req: NextApiRequest, res: NextApiResponse) {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  }


  async function updateProject(req: NextApiRequest, res: NextApiResponse) {
    const { id, title, description, startDate, endDate, members } = req.body;
    const project = await prisma.project.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        members: {
          set: members.map((memberId: number) => ({ id: memberId })),
        },
      },
    });
    res.status(200).json(project);
  }


  async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    await prisma.project.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).end();
  }