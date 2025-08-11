import PocketBase from 'pocketbase';

// Create PocketBase instance only on client side
const getPocketBase = () => {
  if (typeof window === "undefined") return null;
  return new PocketBase('https://icemss.pockethost.io');
};

export function getPocketBaseClient() {
  // For server-side rendering, always create a fresh instance
  if (typeof window === "undefined") {
    const pb = new PocketBase("https://zep-research.pockethost.io")
    pb.autoCancellation(false)
    return pb
  }
}
export async function getJournals() {
  try {
    const pb = getPocketBaseClient()

    // Get the start and end dates for 2025
    const startDate = '2025-01-01 00:00:00'
    const endDate = '2025-12-31 23:59:59'

    // Fetch journals from 2025 only, sorted by creation date (newest first)
    const records = await pb.collection("Journals").getFullList({
      sort: "-created",
      filter: `created >= '${startDate}' && created <= '${endDate}'`
    })

    return records
  } catch (error) {
    console.error("Error fetching journals:", error)
    return []
  }
}

export async function getJournalById(id) {
  try {
    const pb = getPocketBaseClient()
    const record = await pb.collection("Journals").getOne(id)
    return record
  } catch (error) {
    console.error(`Error fetching journal with ID ${id}:`, error)
    return null
  }
}
export const pb = getPocketBase();

export const committeeService = {
  async getAll() {
    try {
      if (!pb) throw new Error('PocketBase not initialized');
      return await pb.collection('committee').getFullList({
        sort: '-created',
        requestKey: null,
      });
    } catch (error) {
      console.error('Error fetching committees:', error);
      throw error;
    }
  }
};

export const speakersService = {
    async getAll() {
      try {
        if (!pb) throw new Error('PocketBase not initialized');
        const records = await pb.collection('speakers').getFullList({
          sort: '-created',
        });
  
        // Group speakers by category
        const groupedSpeakers = records.reduce((acc, speaker) => {
          if (!acc[speaker.category]) {
            acc[speaker.category] = [];
          }
          acc[speaker.category].push(speaker);
          return acc;
        }, {});
  
        return groupedSpeakers;
      } catch (error) {
        console.error('Error fetching speakers:', error);
        throw error;
      }
    }
  };