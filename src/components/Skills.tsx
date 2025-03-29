import { useState } from 'react';
import { Code2, Cpu, Layers } from 'lucide-react';

const technologies = [
  {
    name: "React",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    codeBackground: Array(20).fill(`
      import React, { useState, useEffect } from 'react';
      import { motion, AnimatePresence } from 'framer-motion';
      
      function App() {
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
          fetchData();
        }, []);
        
        const fetchData = async () => {
          const response = await fetch('/api/items');
          const data = await response.json();
          setItems(data);
          setLoading(false);
        };
        
        return (
          <AnimatePresence>
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Loading...
              </motion.div>
            ) : (
              <motion.div layout>
                {items.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        );
      }
    `).join('\n')
  },
  {
    name: "HTML5",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    codeBackground: Array(20).fill(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Modern web application">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="stylesheet" href="styles.css">
        <title>Modern HTML5</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <article>
            <section>
              <h1>Welcome to the Future</h1>
              <p>Experience the power of modern web development</p>
            </section>
          </article>
        </main>
        <footer>
          <p>&copy; 2025 All rights reserved</p>
        </footer>
      </body>
      </html>
    `).join('\n')
  },
  {
    name: "CSS3",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    codeBackground: Array(20).fill(`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

      :root {
        --primary: #3b82f6;
        --secondary: #60a5fa;
        --accent: #2563eb;
        --background: #0f172a;
        --text: #f8fafc;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        place-items: center;
        min-height: 100vh;
        background: linear-gradient(
          45deg,
          var(--background),
          var(--primary),
          var(--accent)
        );
      }

      .card {
        position: relative;
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 
          0 8px 32px rgba(31, 38, 135, 0.37),
          inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        transform-style: preserve-3d;
        transform: perspective(1000px);
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .card:hover {
        transform: 
          perspective(1000px)
          rotateY(15deg)
          rotateX(5deg)
          translateZ(20px);
      }

      @media (prefers-reduced-motion: no-preference) {
        .animate {
          animation: float 6s ease-in-out infinite;
        }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
    `).join('\n')
  },
  {
    name: "JavaScript",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    codeBackground: Array(20).fill(`
      // Modern JavaScript Features
      class APIClient {
        #baseURL;
        #token;
        
        constructor(baseURL, token) {
          this.#baseURL = baseURL;
          this.#token = token;
        }
        
        async #fetchWithAuth(endpoint, options = {}) {
          const response = await fetch(\`\${this.#baseURL}\${endpoint}\`, {
            ...options,
            headers: {
              'Authorization': \`Bearer \${this.#token}\`,
              'Content-Type': 'application/json',
              ...options.headers,
            },
          });
          
          if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
          }
          
          return response.json();
        }
        
        async getData() {
          const data = await this.#fetchWithAuth('/data');
          return data.map(item => ({
            ...item,
            timestamp: new Date(item.timestamp),
            processed: true,
          }));
        }
      }
      
      // Usage with modern features
      const client = new APIClient('https://api.example.com', 'token');
      
      try {
        const data = await client.getData();
        console.log(data?.length ?? 0);
      } catch {
        console.error('Failed to fetch data');
      }
    `).join('\n')
  },
  {
    name: "Java",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    codeBackground: Array(20).fill(`
      import java.util.List;
      import java.util.stream.Collectors;
      import java.util.Optional;
      import java.time.LocalDateTime;
      import java.util.concurrent.CompletableFuture;

      public class ModernJavaExample {
          private final DataService dataService;
          private final EventPublisher eventPublisher;
          
          public record UserDTO(
              String id,
              String name,
              String email,
              LocalDateTime createdAt
          ) {}
          
          public CompletableFuture<List<UserDTO>> processUsers(List<String> userIds) {
              return CompletableFuture.supplyAsync(() ->
                  userIds.parallelStream()
                      .map(this::fetchUser)
                      .filter(Optional::isPresent)
                      .map(Optional::get)
                      .map(this::toDTO)
                      .peek(this::publishEvent)
                      .collect(Collectors.toList())
              );
          }
          
          private Optional<User> fetchUser(String id) {
              try {
                  return Optional.of(dataService.getUser(id));
              } catch (Exception e) {
                  log.error("Error fetching user: " + id, e);
                  return Optional.empty();
              }
          }
          
          private UserDTO toDTO(User user) {
              return new UserDTO(
                  user.getId(),
                  user.getName(),
                  user.getEmail(),
                  user.getCreatedAt()
              );
          }
          
          private void publishEvent(UserDTO user) {
              eventPublisher.publish(
                  "user.processed",
                  user
              );
          }
      }
    `).join('\n')
  },
  {
    name: "MySQL",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    codeBackground: Array(20).fill(`
      -- Modern MySQL Schema and Queries
      CREATE TABLE users (
        id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_username (username)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

      CREATE TABLE posts (
        id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
        user_id CHAR(36) NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        published_at TIMESTAMP NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        INDEX idx_status (status),
        INDEX idx_published (published_at)
      );

      -- Complex query with analytics
      WITH UserStats AS (
        SELECT 
          u.id,
          u.username,
          COUNT(p.id) as post_count,
          MAX(p.published_at) as last_published
        FROM users u
        LEFT JOIN posts p ON u.id = p.user_id
        WHERE p.status = 'published'
        GROUP BY u.id, u.username
      )
      SELECT 
        us.*,
        DATEDIFF(NOW(), us.last_published) as days_since_last_post
      FROM UserStats us
      HAVING post_count > 0
      ORDER BY post_count DESC, last_published DESC;
    `).join('\n')
  },
  {
    name: "SQL",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    codeBackground: Array(20).fill(`
      -- Advanced PostgreSQL Features
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
      CREATE EXTENSION IF NOT EXISTS "postgis";

      CREATE TYPE user_role AS ENUM ('admin', 'editor', 'viewer');

      CREATE TABLE organizations (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name text NOT NULL,
        location geometry(Point, 4326),
        created_at timestamptz DEFAULT current_timestamp,
        updated_at timestamptz DEFAULT current_timestamp
      );

      CREATE TABLE users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        org_id uuid REFERENCES organizations(id) ON DELETE CASCADE,
        email text UNIQUE NOT NULL,
        role user_role NOT NULL DEFAULT 'viewer',
        metadata jsonb DEFAULT '{}',
        created_at timestamptz DEFAULT current_timestamp,
        EXCLUDE USING gist (
          org_id WITH =,
          email WITH =
        )
      );

      CREATE OR REPLACE FUNCTION update_updated_at()
      RETURNS trigger AS $$
      BEGIN
        NEW.updated_at = current_timestamp;
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;

      CREATE TRIGGER update_organizations_updated_at
        BEFORE UPDATE ON organizations
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at();

      -- Complex query with window functions
      WITH RECURSIVE org_hierarchy AS (
        SELECT id, parent_id, name, 1 as level
        FROM organizations
        WHERE parent_id IS NULL
        
        UNION ALL
        
        SELECT o.id, o.parent_id, o.name, oh.level + 1
        FROM organizations o
        INNER JOIN org_hierarchy oh ON oh.id = o.parent_id
      )
      SELECT 
        oh.*,
        COUNT(u.id) OVER (PARTITION BY oh.id) as user_count,
        FIRST_VALUE(oh.name) OVER (
          PARTITION BY COALESCE(oh.parent_id, oh.id) 
          ORDER BY oh.level
          RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
        ) as top_level_org
      FROM org_hierarchy oh
      LEFT JOIN users u ON u.org_id = oh.id
      ORDER BY oh.level, oh.name;
    `).join('\n')
  },
  {
    name: "GitHub",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    codeBackground: Array(20).fill(`
      name: Full Stack CI/CD Pipeline

      on:
        push:
          branches: [ main, develop ]
        pull_request:
          branches: [ main, develop ]

      jobs:
        test:
          runs-on: ubuntu-latest
          
          services:
            postgres:
              image: postgres:14
              env:
                POSTGRES_PASSWORD: postgres
              ports:
                - 5432:5432
              options: >-
                --health-cmd pg_isready
                --health-interval 10s
                --health-timeout 5s
                --health-retries 5
                
          steps:
          - uses: actions/checkout@v3
          
          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: '18'
              cache: 'npm'
              
          - name: Install Dependencies
            run: |
              npm ci
              
          - name: Run Tests
            run: |
              npm run test:ci
            env:
              DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
              
          - name: Upload Coverage
            uses: codecov/codecov-action@v3
            
        deploy:
          needs: test
          if: github.ref == 'refs/heads/main'
          runs-on: ubuntu-latest
          
          steps:
          - uses: actions/checkout@v3
          
          - name: Deploy to Production
            uses: some-deploy-action@v1
            with:
              token: \${{ secrets.DEPLOY_TOKEN }}
    `).join('\n')
  },
  {
    name: "Unity",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg",
    codeBackground: Array(20).fill(`
      using UnityEngine;
      using System.Collections;
      using System.Collections.Generic;
      using UnityEngine.InputSystem;
      using Cinemachine;

      [RequireComponent(typeof(Rigidbody2D))]
      public class AdvancedPlayerController : MonoBehaviour
      {
          [Header("Movement")]
          [SerializeField] private float moveSpeed = 5f;
          [SerializeField] private float jumpForce = 12f;
          [SerializeField] private float coyoteTime = 0.2f;
          
          [Header("Ground Check")]
          [SerializeField] private Transform groundCheck;
          [SerializeField] private LayerMask groundLayer;
          [SerializeField] private float groundRadius = 0.2f;
          
          [Header("Wall Sliding")]
          [SerializeField] private float wallSlidingSpeed = 2f;
          [SerializeField] private Transform wallCheck;
          [SerializeField] private LayerMask wallLayer;
          
          private Rigidbody2D rb;
          private Animator animator;
          private float coyoteTimeCounter;
          private bool isWallSliding;
          private Vector2 moveInput;
          
          private void Awake()
          {
              rb = GetComponent<Rigidbody2D>();
              animator = GetComponent<Animator>();
          }
          
          private void Update()
          {
              HandleMovement();
              HandleWallSlide();
              UpdateAnimations();
          }
          
          private void HandleMovement()
          {
              rb.velocity = new Vector2(moveInput.x * moveSpeed, rb.velocity.y);
              
              if (IsGrounded())
              {
                  coyoteTimeCounter = coyoteTime;
              }
              else
              {
                  coyoteTimeCounter -= Time.deltaTime;
              }
          }
          
          private void HandleWallSlide()
          {
              isWallSliding = false;
              
              if (IsTouchingWall() && !IsGrounded() && rb.velocity.y < 0)
              {
                  isWallSliding = true;
                  rb.velocity = new Vector2(rb.velocity.x, -wallSlidingSpeed);
              }
          }
          
          private void UpdateAnimations()
          {
              animator.SetFloat("Speed", Mathf.Abs(moveInput.x));
              animator.SetBool("IsJumping", !IsGrounded());
              animator.SetBool("IsWallSliding", isWallSliding);
          }
          
          private bool IsGrounded() =>
              Physics2D.OverlapCircle(groundCheck.position, groundRadius, groundLayer);
              
          private bool IsTouchingWall() =>
              Physics2D.OverlapCircle(wallCheck.position, groundRadius, wallLayer);
              
          public void OnMove(InputValue value)
          {
              moveInput = value.Get<Vector2>();
          }
          
          public void OnJump(InputValue value)
          {
              if (value.isPressed && (coyoteTimeCounter > 0f || isWallSliding))
              {
                  rb.velocity = new Vector2(rb.velocity.x, jumpForce);
                  coyoteTimeCounter = 0f;
              }
          }
      }
    `).join('\n')
  },
  {
    name: "Node.js",
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    codeBackground: Array(20).fill(`
      import express from 'express';
      import { createServer } from 'http';
      import { Server } from 'socket.io';
      import { PrismaClient } from '@prisma/client';
      import { rateLimit } from 'express-rate-limit';
      import { createClient } from 'redis';
      import winston from 'winston';

      const app = express();
      const httpServer = createServer(app);
      const io = new Server(httpServer);
      const prisma = new PrismaClient();
      const redis = createClient();

      const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' })
        ]
      });

      const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100
      });

      app.use(limiter);
      app.use(express.json());

      // WebSocket handling
      io.on('connection', (socket) => {
        logger.info('Client connected');
        
        socket.on('join-room', async (roomId) => {
          socket.join(roomId);
          
          const messages = await prisma.message.findMany({
            where: { roomId },
            include: { user: true },
            orderBy: { createdAt: 'desc' },
            take: 50
          });
          
          socket.emit('previous-messages', messages);
        });
        
        socket.on('message', async (data) => {
          const message = await prisma.message.create({
            data: {
              content: data.content,
              userId: data.userId,
              roomId: data.roomId
            }
          });
          
          io.to(data.roomId).emit('new-message', message);
        });
      });

      // REST API endpoints
      app.post('/api/users', async (req, res) => {
        try {
          const user = await prisma.user.create({
            data: req.body
          });
          
          await redis.set(\`user:\${user.id}\`, JSON.stringify(user));
          
          res.json(user);
        } catch (error) {
          logger.error('Error creating user:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });

      const PORT = process.env.PORT || 3000;
      httpServer.listen(PORT, () => {
        logger.info(\`Server running on port \${PORT}\`);
      });
    `).join('\n')
  }
];

export default function Skills() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center bg-[#0A0F1C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#2A2F4C] opacity-80"
           style={{ backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite' }}/>
      
      {/* Code background overlay */}
      <div 
        className={`fixed inset-0 transition-opacity duration-500 ${
          hoveredTech ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          fontFamily: 'monospace',
          whiteSpace: 'pre',
          overflow: 'hidden',
          padding: '2rem',
          fontSize: '0.8rem',
          color: '#fff',
          columnCount: 3,
          columnGap: '2rem',
          columnRule: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {hoveredTech && (
          <div className="animate-scroll">
            {technologies.find(tech => tech.name === hoveredTech)?.codeBackground}
          </div>
        )}
      </div>

      {/* Animated mesh grid */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        animation: 'float 15s infinite linear'
      }}/>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Cpu, Layers, Code2].map((Icon, index) => (
          <div
            key={index}
            className="absolute text-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'scale(3)',
              animation: `float ${Math.random() * 5 + 10}s infinite ease-in-out`
            }}
          >
            <Icon />
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold tracking-tighter mb-6">
            <span className="text-white">Technical</span>
            <span className="text-gradient ml-4">Skills</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto glassmorphism rounded-2xl p-6">
            Proficient in a wide range of <span className="text-gradient font-semibold">modern technologies</span> for building robust applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative glassmorphism rounded-2xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"/>
              
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl transform group-hover:scale-125 transition-transform"/>
                <img
                  src={tech.imageUrl}
                  alt={tech.name}
                  className="w-16 h-16 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-white text-center relative z-10">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}