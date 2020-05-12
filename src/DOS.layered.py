#! /usr/bin/python
# Developed by Levi Lentz to make his advisor, Alexie Kolpak, happy
# Distributed under the MIT License
# All I ask is you link back to my blog if you find this helpful:
# http://blog.levilentz.com

import sys
import os
import re
import glob
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.gridspec as gs

ylim = [0,5] #This is the y limits of your subplots
xlim = [-10,10] #The x limits of your subplots
colorkeyfile = "color.key" #To add color to your lines

#The plotting function takes the subplot by reference and adds the data to it. 
def plotting(directory,subplot): 
  filelist = glob.glob(directory + "/*wfc*")
  #This tries to get the fermi level from nscf.out
  #If you want to plot referenced to something else, you could easily just manually put it in 
  #after removing nscf.out
  try:
    nscfout = open(directory + '/nscf.out','r')
    for i in nscfout:
      if ' Fermi ' in i:
        fermi = float(i.split()[4])
    nscfout.close()
  except:
    print("Unable to get fermi level from " + directory + "/nscf.out")
    print("Enter Fermi Level:")
    fermi = float(raw_input())
  filekey = open(colorkeyfile,'r')
  colorkey = {'null' : 12345}
  for i in filekey:
    colorkey[i.split()[0]] = i.split()[1]
  filekey.close()
  #This does the actual plotting, and the filling in of the curves
  for filename in filelist:
    LDOS=np.loadtxt(filename)
    LDOS[:,0] = np.subtract(LDOS[:,0],fermi)
    specie = filename[filename.find("(")+1:filename.find(")")]
    subplot[directory].plot(LDOS[:,0], LDOS[:,1], colorkey[specie])
    subplot[directory].fill_between(LDOS[:,0],LDOS[:,1], where=LDOS[:,0] < 0, color=colorkey[specie],alpha=0.25)
  subplot[directory].set_ylim(ylim)
  subplot[directory].set_xlim(xlim)

if __name__ == '__main__':
  #We store the directory names in directories
  directories = []
  #Subplots is a dictionary storing the subplots referenced by directory[]
  subplts = {}
  #Labels is the same as subplots, however we store the label here
  labels = {}
  try:
    f = open('directories','r')
    for i in f:
      directories.append(i.strip().split()[0])
      labels[i.strip().split()[0]] = i.strip().split()[1]
    f.close()
  except:
    directories.append('.')
    labels['.'] = '.'
  size = len(directories)
  gs1 = gs.GridSpec(size,1)
  gs1.update(wspace=0.0,hspace=0.0)
  counter = 0
  fx = [0,0]
  fy = ylim
  #This removes the ticks that we dont want
  for i in directories:
    subplts[i] = plt.subplot(gs1[counter])
    counter += 1
    subplts[i].set_yticklabels([])
    if counter < size:
      subplts[i].set_xticklabels([])
  #This adds the plots, data, and labels
  for i in directories:
    plotting(i,subplts)
    subplts[i].text(xlim[1]-0.1,ylim[1]-0.1,labels[i],va='top',ha='right',fontsize=20)
    subplts[i].plot(fx,fy,'--',lw=0.55,color='black',alpha=0.75)
  #This is all label stuff. You can play around with it as you like as it has not been extensively tested
  ymid = abs(ylim[1]-ylim[0])*(1.-len(subplts)/2.)
  subplts[directories[0]].text(xlim[0] - 0.5,ymid,"DOS",fontsize=20,rotation=90, ha='center',va='center')
  spacing = (len(directories)-1)*abs(ylim[1]-ylim[0]) + 0.30*len(directories)
  subplts[directories[0]].text(0,ylim[0]-spacing,r"E-E$_{f}$ [eV]", fontsize=20, ha='center',va='center')
  plt.setp(subplts[directories[-1]].get_xticklabels(),fontsize=16)
  subplts[directories[0]].text(10.5,ymid,os.getcwd(),fontsize=10,rotation=90,va='center',ha='center')
  print("Enter the Title:")
  title = raw_input()
  subplts[directories[0]].text(0,5.2,title,fontsize=24,ha='center')
  plt.show()
